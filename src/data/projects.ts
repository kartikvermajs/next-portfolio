export interface Project {
    id: string;
    name: string;
    shortDescription: string;
    fullDescription: string;
    techStack: string[];
    image: string;
    githubUrl: string;
    liveUrl: string;
}

export const projectsData: Project[] = [
    {
        id: "festovee",
        name: "Festovee (B2B Platform)",
        shortDescription: "A highly scalable B2B multi-vendor commerce platform designed for wholesale transactions, featuring an advanced RFQ and negotiation system.",
        fullDescription: `Festovee is a highly scalable B2B (Business-to-Business) multi-vendor commerce platform. It is designed specifically for wholesale transactions, connecting manufacturers, distributors, and bulk buyers. Unlike traditional B2C e-commerce, Festovee focuses heavily on bulk ordering, minimum order quantities (MOQ), and direct buyer-seller negotiations via a Request for Quote (RFQ) system.

Core Features:
- Multi-Vendor Store Architecture with independent inventories.
- Advanced B2B Product Catalog supporting hierarchical categorization, robust variants, MOQ enforcement, and specific B2B measurement units.
- RFQ (Request for Quotation) & Live Negotiation: Buyers and sellers can negotiate prices in real-time via WebSockets.
- Order Management & Checkout with strict status pipelines.
- B2B Invoicing System to auto-generate compliant invoices tracking subtotal, taxes, due dates, and generating PDF receipts.

Tech Stack & Infrastructure:
Next.js 16 (App Router), React 19, Tailwind CSS v4, PostgreSQL, Prisma ORM, Redux Toolkit, React Query, NextAuth.js, Stripe, Inngest, Pusher (WebSockets), Resend.`,
        techStack: ["Next.js", "React", "Tailwind CSS", "PostgreSQL", "Prisma", "WebSockets"],
        image: "/festovee.png",
        githubUrl: "https://github.com/kartikvermajs/festovee",
        liveUrl: "https://festovee.com",
    },
    {
        id: "social-media",
        name: "NextJS Social Media",
        shortDescription: "A fully functional modern social platform with rich-text posts, secure authentication, and real-time interactions.",
        fullDescription: `This project is a comprehensive, production-grade Full-Stack Social Media Application. It is designed as a modern platform that includes all the core functionalities you would expect from a social network like Twitter or Threads, emphasizing a responsive user interface and real-time capabilities.

Core Features:
- Robust Authentication System using Lucia Auth securely mapped to traditional credentials and Google OAuth.
- Advanced Post Creation: Users can safely author dynamic rich-text posts using Tiptap and gracefully upload media with UploadThing.
- Social Interactions & Feed: Features an infinite scrolling feed powered by React Query, robust commenting, and post bookmarking.
- Profile Management: Interactive tooltips for users and comprehensive profiles with follower/following mechanics.
- Real-Time Messaging using Stream Chat for direct messaging with read receipts and typing indicators.

Tech Stack & Infrastructure:
Next.js 15, React 19, Tailwind CSS, React Hook Form, Zod, Prisma (PostgreSQL), Lucia Auth, TanStack React Query, UploadThing, Stream Chat.`,
        techStack: ["Next.js 15", "Prisma", "PostgreSQL", "Lucia Auth", "Stream Chat", "React Query"],
        image: "/socialmedia.png",
        githubUrl: "https://github.com/kartikvermajs/nextjs-social-media",
        liveUrl: "https://nextjs-social-media-tau.vercel.app",
    },
    {
        id: "doctor",
        name: "Doctor Consultancy Platform",
        shortDescription: "A comprehensive telemedicine platform connecting patients with doctors, featuring live video calls and secure appointment booking.",
        fullDescription: `The application is a robust MERN stack application (with Next.js frontend) specifically tailored to connect patients with doctors securely, supporting a seamless multi-role architecture and digital medical consultations.

Core Features:
- Dual Role Authentication separating specific views and onboarding flows for Doctors and Patients securely via JWT and Google OAuth.
- Dynamic Appointment Booking & Scheduling: Doctors define highly customized availability slots, and the system securely prevents double-booking.
- Integrated Telemedicine via ZegoCloud, allowing patients and doctors to launch instant video/audio consultation rooms directly inside the browser upon successful payment.
- Secure Payment Gateway using Razorpay to compute consultation and platform fees.
- Cloud Media Management permitting doctors to easily upload digital prescriptions safely mapping them to precise appointments.

Tech Stack & Infrastructure:
Next.js 19 (App Router), Zustand, Framer Motion, Axios, Node.js, Express, MongoDB, ZegoCloud, Passport.js, Cloudinary/Uploadthing, Razorpay.`,
        techStack: ["MERN", "Next.js", "ZegoCloud (Telemedicine)", "MongoDB", "Razorpay"],
        image: "/doctor.png",
        githubUrl: "https://github.com/kartikvermajs/doctor-consultancy-platform",
        liveUrl: "https://doctor-consultancy-platform.vercel.app",
    },
    {
        id: "blockchain",
        name: "Blockchain Software Licensing",
        shortDescription: "A Web3-integrated SaaS application that distributes secure software licenses recorded immutably on an Ethereum Smart Contract.",
        fullDescription: `This project is a Blockchain-based Software License Key Management System. A user accesses the Next.js landing page, signs securely in via Supabase, pays via Razorpay, and receives a software key. Activating the key securely triggers a Node.js backend to commit an irreversible, transparent record of an active 1-year license to an Ethereum Smart Contract.

Core Features:
- Complete Smart Contract integration explicitly storing securely-hashed software license keys.
- Fully features Key lifecycle mapping: Create Key (Admin execution), Activate Key, and Status Checking ensuring immutability of license durations directly on the Sepolia chain.
- Hybrid Authentication securely uniting Supabase and custom JWT models tailored to Web3 interaction needs.
- Polished Frontend Landing Page bridging Web2 checkout flows with Web3 backend execution.

Tech Stack & Infrastructure:
Next.js 14, Supabase, Razorpay, Node.js, Express, PostgreSQL, Prisma, ethers.js, Hardhat, Solidity.`,
        techStack: ["Ethereum/Solidity", "Next.js", "Node.js", "Ethers.js", "Supabase"],
        image: "/blockchain.png",
        githubUrl: "https://github.com/kartikvermajs/blockchain-project",
        liveUrl: "https://blockchain-project-tau.vercel.app",
    },
    {
        id: "food-delivery",
        name: "MERN Food Delivery",
        shortDescription: "A complete food delivery workflow featuring a user-facing ordering portal and a dedicated administrative dashboard to manage inventory and order statuses.",
        fullDescription: `This application tackles full-lifecycle order management through a distinct split between a sophisticated React customer portal and an isolated secure operations dashboard.
        
Core Features:
- Fully synced cart management persisting fluidly via continuous backend APIs and LocalStorage.
- Administrative tools to add and remove food items dynamically, uploading image assets securely to Cloudinary mapped concurrently to MongoDB models.
- Complex Checkout flow utilizing Razorpay integrations verifying payment signatures meticulously via Node.js crypto before fulfilling pending orders.
- Order Management dynamically transmitting status transitions (e.g., "Food Processing" -> "Out for Delivery") visible directly on the user's frontend.

Tech Stack & Infrastructure:
React 18, Vite, Node.js, Express.js, MongoDB, JWT, Cloudinary, Razorpay.`,
        techStack: ["React 18", "Express.js", "MongoDB", "Razorpay", "Cloudinary"],
        image: "/fooddelivery.png",
        githubUrl: "https://github.com/kartikvermajs/Food-Delivery",
        liveUrl: "https://tomatofront-il1y.onrender.com",
    },
    {
        id: "mern-blog",
        name: "MERN Blog CMS",
        shortDescription: "A robust content management system highlighting strict Role-Based Access Control and rich-media blog authoring.",
        fullDescription: `This is a complete MERN (MongoDB, Express, React, Node.js) Blog Platform designed as a robust content management system (CMS) that simulates a real-world blogging application, focusing heavily on Role-Based Access Control (RBAC), secure authentication, and seamless content interaction.

Core Features:
- Specialized Role-Based Access Control dividing strictly the administrative content publishing views from the public/user engagement spaces.
- Advanced Content Editing enabling admins to safely curate posts including media embedding hosted entirely on Cloudinary.
- Flexible Authentication marrying traditional email credentials seamlessly with Firebase Google OAuth flows mapping to rigorous JWT authorization models.
- Optimized Backend leveraging a serverless logical structure safely managing and persisting MongoDB connections appropriately for Vercel scaling operations.

Tech Stack & Infrastructure:
React, Redux Toolkit, Tailwind CSS, Flowbite UI, Firebase (OAuth), Node.js, Express.js, MongoDB, JWT, Cloudinary.`,
        techStack: ["React", "Redux", "Express.js", "MongoDB", "Firebase"],
        image: "/mernblog.png",
        githubUrl: "https://github.com/kartikvermajs/mern-blog",
        liveUrl: "https://mern-blog-frontend-flax-two.vercel.app",
    }
];
