"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, Loader2, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error("Failed to send message. Please try again.");
            }

            setStatus("success");
            reset();

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);
        } catch (error: any) {
            console.error(error);
            setStatus("error");
            setErrorMessage(error.message || "An unexpected error occurred.");
        }
    };

    return (
        <section id="contact" className="py-24 md:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6">Get In Touch</h2>
                    <div className="w-16 h-1 bg-accent mx-auto rounded-full mb-8" />
                    <p className="text-lg md:text-xl text-muted">
                        Have a question or want to work together? Leave a message below.
                    </p>
                </div>

                <div className="bg-card border border-border rounded-2xl p-6 md:p-12 shadow-sm relative overflow-hidden">
                    {/* Success Overlay */}
                    {status === "success" && (
                        <div className="absolute inset-0 bg-card/95 backdrop-blur-sm z-10 flex flex-col items-center justify-center animate-in fade-in duration-300">
                            <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-muted text-center max-w-sm">
                                Thanks for reaching out. I'll get back to you as soon as possible.
                            </p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-0">
                        {status === "error" && (
                            <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex items-start gap-3 text-red-500">
                                <XCircle className="w-5 h-5 shrink-0 mt-0.5" />
                                <p className="text-sm">{errorMessage}</p>
                            </div>
                        )}

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground">
                                    Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                                    {...register("name")}
                                    disabled={status === "loading"}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground/50"
                                    {...register("email")}
                                    disabled={status === "loading"}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="How can I help you?"
                                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all placeholder:text-muted-foreground/50 resize-y"
                                {...register("message")}
                                disabled={status === "loading"}
                            />
                            {errors.message && (
                                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            disabled={status === "loading"}
                            size="lg"
                            className="w-full rounded-xl shadow-lg shadow-accent/20 h-14 md:h-16 md:text-lg"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 mr-2" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
}
