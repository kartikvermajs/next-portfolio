__NEXTJS Social Media__

This project is a comprehensive, production\-grade Full\-Stack Social Media Application\. It is designed as a modern platform that includes all the core functionalities you would expect from a social network like Twitter or Threads, emphasizing a responsive user interface and real\-time capabilities\. 

Here is a detailed breakdown of the project, its functionalities, its tech stack, and its features based on the codebase's setup: 

≡ƒºá What is this project about? 

The application serves as a fully functional social platform where users can securely authenticate, post rich\-text content with media, interact with others through likes and comments, manage personal profiles, follow other users, and engage in real\-time direct messaging\. It explores modern web architectures, heavily utilizing the Next\.js 15 App Router and distinguishing cleanly between Server and Client component boundaries\. 

ΓÜÖ∩╕Å Tech Stack 

Frontend \(UI & Interaction\): 

Framework: Next\.js 15 \(utilizing the newer App Router\) and React 19\. 

Styling: Tailwind CSS combined with shadcn/ui and Radix UI for building accessible, reusable, and beautiful components\. 

Form Handling: React Hook Form coupled with Zod for robust client\-side and server\-side validation\. 

Rich Text Editor: Tiptap Editor for creating formatted posts\. 

Icons & Theming: Lucide React for consistent iconography and next\-themes for seamless light/dark mode switching\. 

Backend, Data & State: 

Database ORM: Prisma ORM connected to a PostgreSQL database\. 

Authentication: 

Lucia Auth for secure, session\-based authentication\. 

Arctic to handle Google OAuth integrations\. 

@node\-rs/argon2 for secure password hashing\. 

Data Fetching & Caching: TanStack React Query ensures fast loading times, infinite scrolling, and optimistic UI updates for a snappy user experience\. 

Specialized Integrations: 

Media Uploads: UploadThing handles image and video uploads securely\. 

Real\-time Chat: Powered by Stream Chat \(stream\-chat\-react\), enabling instant direct messaging between users\. 

Image Manipulation: Tools like react\-cropper and react\-image\-file\-resizer allow users to crop and optimize images \(e\.g\., when updating profile pictures\)\. 

Γ£¿ Core Functionalities & Features 

1\. ≡ƒöÉ Robust Authentication System 

Traditional Email & Password sign\-up/login\. 

Secure Third\-Party Login seamlessly mapped to user accounts via Google OAuth\. 

Session management is handled securely on the server with Lucia Auth\. 

2\. ≡ƒô¥ Advanced Post Creation & Management 

Users can create, edit, and delete their own posts\. 

The post composer utilizes Tiptap, allowing for rich\-text editing \(bold, italics, placeholders, etc\.\)\. 

Users can attach media \(images/videos\) to their posts, handled efficiently via UploadThing\. 

Links inside posts automatically become clickable using custom Linkify components\. 

3\. ≡ƒÆ¼ Social Interactions & Feed 

Infinite Scrolling Feed: The homepage/feed loads posts continuously as you scroll down, powered by React Query\. 

Likes & Bookmarks: Users can like posts and save/bookmark them privately for later reading\. 

Comments: Full\-fledged comment system with pagination for each post\. 

Trending Sidebar: Suggests trending topics or active posts to the user\. 

4\. ≡ƒæñ Profiles & Follow System 

Each user has a dedicated public profile displaying their posts and follower/following count\. 

Interactive Tooltips: Hovering over a user's @handle anywhere in the app fetches and displays a mini\-preview of their profile \(User Tooltips\)\. 

Users can upload and crop a custom avatar \(CropImageDialog\) which is then resized securely before uploading\. 

Users can dynamically follow or unfollow other users\. 

5\. ≡ƒô⌐ Real\-Time Messaging \(Stream\) 

A dedicated messaging interface where users can chat in real time\. Features read receipts, typing indicators, and instant message delivery using Stream Chat's robust infrastructure\. 

6\. ≡ƒöì Search & Discovery 

A dedicated search field allows users to query the database to find specific users or search keywords across posts\. 

7\. ≡ƒô▒ UI/UX Polish 

Optimistic Updates: When you like a post or follow a user, the UI updates instantly before the database confirms it, making the app feel incredibly fast\. 

fully responsive design, ensuring the app looks fantastic on both high\-resolution desktops and small mobile screens\. 

Contextual loading states, custom tooltips, and toast notifications \(via Radix UI\) for all user actions \(e\.g\., "Post created successfully"\)\.

Github link \- https://github\.com/kartikvermajs/nextjs\-social\-media

Live Link \- [https://nextjs\-social\-media\-tau\.vercel\.app](https://nextjs-social-media-tau.vercel.app)

__Food Delivery App__

__Food Delivery Project Overview__

This document provides a comprehensive overview of the MERN stack Food Delivery application, detailing its tech stack, architecture, and core features\.

__≡ƒÜÇ Tech Stack__

1\. Frontend \(Client\)

- __Framework:__┬áReact 18
- __Build Tool:__┬áVite
- __Routing:__┬áReact Router DOM \(v6\)
- __State Management:__┬áReact Context API / Local State \(managed mostly at top level or via context\)
- __HTTP Client:__┬áAxios for interacting with backend APIs
- __Icons & UI:__┬áLucide React, React Toastify \(for notifications\)

2\. Admin \(Dashboard\)

- __Framework:__┬áReact 18 \(built with Vite\)
- __Routing:__┬áReact Router DOM \(v6\)
- __HTTP Client:__┬áAxios
- __UI:__┬áReact Toastify \(for notifications\)

3\. Backend \(Server\)

- __Environment:__┬áNode\.js
- __Framework:__┬áExpress\.js
- __Database:__┬áMongoDB \(using Mongoose object modeling\)
- __Authentication:__┬áJSON Web Tokens \(JWT\),┬ábcryptjs┬áfor password hashing
- __File Uploads:__┬ámulter┬á\(for handling multipart/form\-data\), Cloudinary \(cloudinary┬áSDK v2\) for remote image management
- __Payment Gateway:__┬áRazorpay \(order creation and signature verification\)
- __Misc:__┬ácors┬á\(Cross\-Origin Resource Sharing\),┬ádotenv┬á\(Environment Variables\)

__≡ƒÅù∩╕Å Architecture & Implementation details__

The project is structured as a monorepo consisting of three main directories:

1. backend/: The Node\.js/Express server that serves RESTful APIs\.
2. frontend/: The customer\-facing React web application\.
3. admin/: The administrative React dashboard for managing food items and orders\.

Core Data Models

- __UserModel:__┬áStores┬áname,┬áemail,┬ápassword┬á\(hashed\), and┬ácartData┬á\(an object mapping food item IDs to their quantities\)\.
- __FoodModel:__┬áStores food details:┬áname,┬ádescription,┬áprice,┬ácategory, and┬áimage┬á\(secure URL from Cloudinary\)\.
- __OrderModel:__┬áStores order information:┬áuserId,┬áitems┬á\(array of food items\),┬áamount,┬áaddress,┬ástatus┬á\(e\.g\., Food Processing, Out for delivery\), and┬ápayment┬á\(boolean\)\.

Payment Flow \(Razorpay\)

1. User enters delivery address and clicks "Place Order" in frontend\.
2. Frontend calls┬á/api/order/place\.
3. Backend creates a new pending order in DB, clears user's cart, and creates a Razorpay Order ID\.
4. Frontend initiates the Razorpay checkout overlay using the Order ID\.
5. On successful payment, Razorpay returns payment details and signature\.
6. Frontend calls┬á/api/order/verify┬áwith payment details\.
7. Backend verifies the signature using┬ácrypto, marks the order┬ápayment: true┬áand┬ástatus: 'Paid'\.

Image Upload Flow \(Cloudinary\)

1. Admin selects an image and submits the "Add Food" form\.
2. The file is sent via┬ámultipart/form\-data┬áto┬á/api/food/add\.
3. multer┬áintercepts the file and provides the buffer\.
4. cloudinary\.uploader\.upload\_stream┬áuploads the buffer directly to the┬áfood\_items┬áfolder on Cloudinary\.
5. A secure URL is returned and saved directly in MongoDB's┬áfoodModel\.
6. When deleting a food item, the backend extracts the public ID from the URL and calls┬ácloudinary\.uploader\.destroy\(\)┬áto delete the image from Cloudinary before deleting the DB document\.

__≡ƒîƒ Application Features__

Customer Facing \(Frontend\)

- __User Authentication:__┬áRegistration and Login flows with JWT tokens stored in localStorage\.
- __Menu Exploration:__┬áUsers can browse food items categorized dynamically\.
- __Cart Management:__
	- Add items to the cart or adjust quantities\.
	- Cart state is synced continuously with the backend using┬á/api/cart/add┬áand┬á/api/cart/remove\.
- __Checkout Process:__
	- Fill out delivery address details\.
	- Pay seamlessly using Razorpay integration\.
- __My Orders:__┬áView personal order history mapped to the logged\-in user\.

Administrative \(Admin Panel\)

- __Add New Items:__┬áForm to add new dishes including name, description, price, category, and an image file\.
- __List & Remove Items:__┬áView all items currently mapped in the database\. Deleting an item securely removes the artifact from Cloudinary and deletes the record from MongoDB\.
- __Order Management:__
	- View all user orders \(address, items, amount\)\.
	- Update real\-time order status \(e\.g\., "Food Processing", "Out for Delivery", "Delivered"\) which dynamically reflects on the user's "My Orders" page\.

Backend APIs

- __Food Routes \(/api/food\)__: Add, list, remove foods\.
- __User Routes \(/api/user\)__: Register, login\.
- __Cart Routes \(/api/cart\)__: Add to cart, remove from cart, get cart\.
- __Order Routes \(/api/order\)__: Place order, verify payment, list user's orders, list all orders \(admin\), update order status \(admin\)\.

Github Link :\- https://github\.com/kartikvermajs/Food\-Delivery

Live Link :\- [https://tomatofront\-il1y\.onrender\.com](https://tomatofront-il1y.onrender.com)

__Doctor Consultancy Platform: Project Overview__

This document provides a comprehensive breakdown of the "Doctor Consultancy Platform" project based on the codebase analysis\.

__1\. Project Architecture & Tech Stack__

The application is built using the┬á__MERN__┬ástack \(MongoDB, Express, React, Node\.js\) with Next\.js serving the React frontend\.

Frontend Tech Stack

- __Framework__: Next\.js \(built on React 19, App Router\)
- __Styling__: Tailwind CSS v4,┬áclsx,┬átailwind\-merge┬áfor utility classes
- __UI Components__: Radix UI \(Primitives like Avatar, Checkbox, Dropdown Menu, Select, Tabs, etc\.\)
- __State Management__: Zustand
- __Animations__: Framer Motion, Tailwind Animate CSS
- __HTTP Client__: Axios
- __Date Formatting__:┬ádate\-fns,┬áreact\-day\-picker
- __Video/Audio Calls__:┬á@zegocloud/zego\-uikit\-prebuilt┬á\(Telemedicine integration\)
- __File Uploads__:┬áuploadthing┬á&┬á@uploadthing/react

Backend Tech Stack

- __Runtime/Framework__: Node\.js with Express
- __Database__: MongoDB with Mongoose ODM
- __Authentication__: JSON Web Tokens \(JWT\) & Passport\.js \(specifically Google OAuth 2\.0 via┬ápassport\-google\-oauth20\)
- __Security & Utils__:┬ábcryptjs┬á\(password hashing\),┬áhelmet┬á\(HTTP header security\),┬ácors,┬ámorgan┬á\(logging\),┬áexpress\-validator┬á\(input validation\)
- __File Uploads__:┬ácloudinary,┬ámulter,┬ámulter\-storage\-cloudinary
- __Payments__: Razorpay

__2\. Core Entities \(Data Models\)__

The data structure relies on three core entities:

Doctor

- __Personal Data__: Name, Email, Password, Google ID, Profile Image, Category, Specialization \(e\.g\., Cardiologist, Dermatologist\)\.
- __Professional Details__: Qualification, Experience, About, Fees, Hospital Information\.
- __Scheduling__:┬áavailabilityRange┬á\(start/end dates, excluded weekdays like weekends\) and┬ádailyTimeRanges┬á\(e\.g\., 09:00 to 12:00\) with configurable slot durations \(default 30 mins\)\.
- __Status__:┬áisVerified,┬áisActive\.

Patient

- __Personal Data__: Name, Email, Password, Google ID, Profile Image, Phone, DOB, Age \(auto\-computed\), Gender, Blood Group\.
- __Emergency Contact__: Name, Phone, Relationship\.
- __Medical History__: Allergies, Current Medications, Chronic Conditions\.
- __Status__:┬áisVerified,┬áisActive\.

Appointment

- __Participants__: Links┬ádoctorId┬áand┬ápatientId\.
- __Scheduling Details__: Date, Slot Start/End Times\.
- __Consultation Mode__: "Video Consultation" or "Voice Call"\.
- __Status Management__: Scheduled, In Progress, Completed, Cancelled\.
- __Telemedicine__: Connects via┬ázegoRoomId\.
- __Clinical Records__: Symptoms, Doctor's Prescription Text, Notes\.
- __Attachments__: Uploaded documents \(Lab Reports, Prescriptions\)\.
- __Financials__: Consultation Fees, Platform Fees, Total Amount, Payment Status \(Pending, Paid, Refunded\)\.

__3\. Key Implementations & Features__

1. __Dual Role Authentication System__
	- The app securely handles distinct onboarding and authentication flows for Doctors and Patients using JWTs\. It also supports seamless sign\-in with Google\.
2. __Doctor Onboarding & Profile Management__
	- Doctors can configure dynamic availability settings, defining their active working days, specific daily time shifts, and their per\-consultation fees\.
3. __Patient Dashboard & Medical Records__
	- Patients maintain personal profiles with built\-in medical histories and emergency contacts, providing key context to doctors during consultations\.
4. __Dynamic Appointment Booking System__
	- Patients can browse available doctors and book specific time slots depending on the doctor's custom schedule availability \(preventing double booking using a unique index on Doctor ID \+ Time Slot\)\.
5. __Integrated Telemedicine \(ZegoCloud\)__
	- Once an appointment is booked and paid for, a unique room ID is generated, allowing both parties to join a real\-time Video or Audio call directly within the platform\.
6. __Secure Payment Gateway \(Razorpay\)__
	- Handles financial transactions directly, computing consultation fees plus platform fees and changing the appointment status sequentially \(Pending \-> Paid\)\.
7. __Cloud Media & Document Sharing__
	- Both endpoints seamlessly handle file storage\. Cloudinary is used on the Express backend \(for profile pictures and lab reports\), and Uploadthing is configured on the Next\.js frontend, likely for quick, streamlined client\-side uploads\.
	- Doctors can upload digital prescriptions and medical notes linked directly to an appointment ID\.

Github link :\- https://github\.com/kartikvermajs/doctor\-consultancy\-platform

Live Link :\- [https://doctor\-consultancy\-platform\.vercel\.app](https://doctor-consultancy-platform.vercel.app)

__Blockchain Project__

This project is a┬á__Blockchain\-based Software License Key Management System__\. It provides a service where software license keys are securely created, stored, and managed on the Ethereum blockchain via a Smart Contract\. The project consists of a full\-stack web application with a modern React frontend and a Node\.js/Express backend that securely interacts with the blockchain\.

There are three main components:

1. __Frontend__: A Next\.js landing page and dashboard where users can buy, activate, and check the status of their license keys\.
2. __Backend__: An Express API that acts as an intermediary securely interacting with the Smart Contract and a PostgreSQL database\.
3. __Smart Contract__: A Solidity contract deployed on the blockchain that acts as the single source of truth for the validity and expiration of the license keys\.

__Tech Stack__

__Frontend__┬á\("blockchain\-keyLicensing\-landing\-page"\)

- __Core__: Next\.js 14 \(App Router\), React 18, TypeScript\.
- __Styling & UI__: Tailwind CSS, Framer Motion \(for animations\),┬á@mui/material, and Radix UI primitives \(likely used alongside┬áshadcn/ui\)\. It also includes Lottie animations \(@dotlottie/react\-player\)\.
- __Authentication__: Supabase \(@supabase/ssr,┬á@supabase/supabase\-js\) for managing user sessions and OAuth\.
- __Forms & Validation__: React Hook Form with Zod for robust client\-side validation\.
- __Payments__: Razorpay integration \(razorpay┬ápackage\) for processing license key purchases\.

__Backend__

- __Core__: Node\.js, Express, TypeScript\.
- __Database & ORM__: PostgreSQL database \(likely Supabase DB\) accessed via┬á__Prisma ORM__\.
- __Blockchain Interaction__:┬áethers\.js┬á\(v5\) and┬á__Hardhat__┬áfor calling the Smart Contract\.
- __Authentication/Security__: Custom routing with┬ácors, handling OTPs, and interacting with the Postgres DB\.┬ánodemailer┬áis used for sending emails \(like OTPs or receipts\)\.
- __Validation & Logging__: Zod for API request payload validation, and Winston for backend logging\.

__Blockchain__

- __Language__: Solidity \(^0\.8\.0\)\.
- __Environment__: Hardhat, configured to deploy on the┬á__Sepolia__┬átest network\.

__Implementation Details & Features__

__1\. Smart Contract \(KeyManager\.sol\)__

The core truth of the licensing system lives here\.

- __Key Encryption__: Keys are never stored in plain text; the contract hashes strings using┬ákeccak256\(abi\.encodePacked\(key\)\)┬ábefore saving them\.
- __Key Creation \(createKey\)__: Initializes a specific key hash with an┬áInactive┬ástatus\. Only the contract owner \(the backend acting as an admin\) can perform this\.
- __Key Activation \(activateKey\)__: Sets the key status to┬áActive\. It automatically records the current block timestamp as the┬áactivationDate┬áand sets the┬áexpiryDate┬áexactly┬á__1 year \(365 days\) later__\.
- __Status Checking \(getKeyInfo\)__: A read\-only function that returns whether a key is Inactive/Active, its activation date, and its expiry date\.

__2\. Backend API \(/api\)__

The backend serves two main routing modules:

- __/api/auth__:
	- Handles user sessions and authentication logic\.
	- The Prisma schema includes┬áUser,┬áSession, and┬áOtpRequest┬átables, indicating that passwordless OTP \(email\-based\) login is supported alongside external Supabase configurations\.
- __/api/key\-manager__:
	- __POST /create\-key__: Validates the payload with Zod, then invokes the contract's┬ácreateKey┬áfunction\. If the key already exists, it handles the┬áKEY\_ALREADY\_EXISTS┬árevert gracefully\.
	- __POST /activate\-key__: Takes a plain\-text key from the frontend and sends the transaction to activate it on the blockchain, returning the activation and expiration dates\.
	- __GET /key\-info__: Fetches the on\-chain status \(Active or Inactive\), activation date, and expiration date of a queried key\.

__3\. Frontend Application \(src/app\)__

- __Landing & Pricing__: The main page \(/\) serves a Hero section and a Pricing section\. Users evaluate pricing plans here, presumably integrating with the Razorpay payment gateway to purchase a key\.
- __Authentication Hub \(/\(auth\)\)__: Comprehensive customized login handling\. Standard forms, Forgot Password flows, Reset Password flows, and OAuth logic for Google and GitHub\. Features specific React components targeting these exact steps \(LoginForm,┬áLoginGoogle,┬áLoginGithub,┬áSignUpForm\)\.
- __Key Activation \(/activate\)__: Once a user has a key, they can go to this page to activate it\. It sends the key to the backend, which triggers the on\-chain activation, officially starting their 1\-year software license\.
- __Status Checking \(/status\)__: A user\-facing page where a user can input their license key to see if it is still valid, inactive, or expired, directly reading the blockchain state through the backend API\.

__Summary__

You have built a complete Web3\-integrated SaaS application\. A user comes to the Next\.js landing page, signs securely in via Supabase, pays via Razorpay, and receives a software key\. They activate this key through your UI, which prompts your secure Node\.js backend to commit an irreversible, transparent record of an active 1\-year license to an Ethereum Smart Contract\.

Github Link :\- [https://github\.com/kartikvermajs/blockchain\-project](https://github.com/kartikvermajs/blockchain-project)

Line Link :\- [https://blockchain\-project\-tau\.vercel\.app](https://blockchain-project-tau.vercel.app)

__B2B Platform__

__Festovee__┬áis a highly scalable┬á__B2B \(Business\-to\-Business\) multi\-vendor commerce platform__\. It is designed specifically for wholesale transactions, connecting manufacturers, distributors, and bulk buyers\. Unlike traditional B2C e\-commerce \(like Amazon or Shopify\), Festovee focuses heavily on bulk ordering, minimum order quantities \(MOQ\), and direct buyer\-seller negotiations via a Request for Quote \(RFQ\) system\.

≡ƒ¢á∩╕Å Tech Stack & Infrastructure

The application is a modern JavaScript/TypeScript full\-stack application built around the React ecosystem\.

__Core Web Technologies:__

- __Framework:__┬áNext\.js 16 \(App Router\)
- __Language & UI:__┬áReact 19, Tailwind CSS v4, and┬áshadcn/ui┬á\(for accessible, customizable components\)\.
- __Animations:__┬áFramer Motion & Embla Carousel\.

__Backend & Data Layer:__

- __Database:__┬áPostgreSQL \(hosted on Serverless Neon DB\)\.
- __ORM:__┬áPrisma ORM for type\-safe database access and schema management\.
- __State Management & Fetching:__┬áRedux Toolkit \(client state\) and TanStack React Query \(server state & caching\)\.

__Authentication, Security & Roles:__

- NextAuth\.js \(v4\) with Prisma Adapter\.
- Supports Email/Password \(hashed via bcryptjs\) and Google OAuth provider\.
- Role\-based architecture distinguishing between Admins, Sellers \(Vendors\), and Buyers\.

__3rd Party Integrations & Infrastructure:__

- __Payments:__┬áStripe Integration & Cash on Delivery \(COD\)\.
- __Media Storage:__┬áImageKit \(for optimized image uploads & delivery\)\.
- __Background Jobs:__┬áInngest \(reliable background task and cron job execution, e\.g\., SLA timers, order processing\)\.
- __Transactional Emails:__┬áResend combined with┬á@react\-email/render\.
- __Real\-time Capabilities:__┬áPusher/WebSockets for live chat functionality during order negotiations\.
- __Search Engine:__┬áClient\-side fuzzy search handled via┬áFuse\.js\.

≡ƒÜÇ Core Features & Implementation Details

Based on the Prisma Schema and Roadmap, here is how the application is structured underneath:

1\. Multi\-Vendor Store Architecture

- __Store Profiles:__┬áSellers can register and create a┬áStore\. Stores require an approval process \(Admin moderation\) before they become┬áisActive: true\.
- __Independent Inventories:__┬áEach seller manages their own┬áProduct┬áand┬áProductVariant┬ácatalogs linked strictly to their┬áStoreId\.

2\. Advanced B2B Product Catalog

A highly relational approach to inventory, far more complex than simple B2C:

- __Categories & Subcategories:__┬áFull hierarchical categorization system\.
- __Extensive Variant System:__┬áProducts support robust┬áProductVariants including SKU tracking, color, bullet points, multiple images, MRP vs\. Selling Price, Custom Attributes \(Text, Number, Boolean\), and Sizes\.
- __B2B Measurement:__┬áSupport for granular B2B metrics like┬áMeasurementBasis┬á\(Weight, Volume, Area\) and units \(Pieces, Packs, Kilograms, Sq Meters\)\.
- __MOQ Enforcement:__┬áThe database tracks┬ámoq┬á\(Minimum Order Quantity\) on a per\-variant basis to enforce wholesale volume purchases natively\.
- __Return Policies:__┬áVariants enforce strict B2B return protocols natively \(e\.g\.,┬áSEVEN\_DAYS┬ávs\.┬áNON\_REFUNDABLE\)\.

3\. RFQ \(Request for Quotation\) & Live Negotiation

*This is the core differentiating feature of Festovee\.*┬áSince wholesale prices are rarely fixed, buyers and sellers can negotiate:

- __State Machine:__┬áThe┬áRfq┬átable tracks negotiations through precise stages:┬áINITIATED┬áΓ₧ö┬áSELLER\_QUOTED┬áΓ₧ö┬áBUYER\_COUNTERED┬áΓ₧ö┬áACCEPTED┬áΓ₧ö┬áREJECTED┬á/┬áEXPIRED\.
- __Real\-Time Live Chat:__┬áFacilitated by WebSockets \(Pusher\), buyers and sellers communicate in real\-time via┬áRfqMessages\.
- __Quotes:__┬áSellers can attach a┬áquotedPrice┬ánatively directly to messages\.
- *\(Roadmap feature\)*: Currently implementing SLA \(Service Level Agreement\) response timers, "Seller is typing\.\.\." indicators, and 1\-click Quote\-to\-Order conversion\.

4\. Order Management & Checkout

- __Cart System:__┬áRelational cart mapped to specific Product Variants\.
- __Order Tracking:__┬áStatus tracking pipeline:┬áORDER\_PLACED┬áΓ₧ö┬áPROCESSING┬áΓ₧ö┬áSHIPPED┬áΓ₧ö┬áDELIVERED\.
- __Coupons:__┬áA flexible┬áCoupon┬ámodel that natively handles user restrictions \(new vs\. existing user, membership tiers\) and expiration\.

5\. B2B Invoicing System

- A dedicated┬áInvoice┬ámodel auto\-generates B2B compliant invoices linking the Buyer, Seller, and Order\.
- It tracks Subtotal, Taxes, Total, Due Dates, Payment Status \(PENDING,┬áPAID,┬áFAILED\), and generates PDF receipts \(pdfUrl\)\.

6\. User Experience & Peripheral Systems

- __Rating & Reviews:__┬áNatively tied to┬áUser,┬áProduct, and specific┬áOrder┬áIDs to ensure reviews come from verified buyers\.
- __Wishlists & Addresses:__┬áStandard e\-commerce utilities\.

≡ƒù║∩╕Å Future Roadmap

The┬á

roadmap\.txt┬áfile indicates that Festovee is actively being pushed toward adding AI and hyper\-modern UX:

- __Semantic Similarity & Recommendation Engine:__┬áRecommending related products below the product page using AI logic \(Noticeably, OpenAI packages are installed for this\)\.
- __Advanced Push Chat:__┬áAdding WhatsApp/iMessage\-like read receipts and automatic scrolling for the negotiation chat\.

Github Link :\- https://github\.com/kartikvermajs/festovee

Live Link :\- [https://festovee\.com](https://festovee.com)

__Mern Blog__

This project is a complete, full\-stack┬á__MERN \(MongoDB, Express, React, Node\.js\) Blog Platform__\. It is designed as a robust content management system \(CMS\) that simulates a real\-world blogging application, focusing heavily on┬á__Role\-Based Access Control \(RBAC\)__, secure authentication, and seamless content interaction\.

Here is a detailed breakdown of the application, from its tech stack to the nitty\-gritty implementation of its features\.

≡ƒÅù∩╕Å 1\. Tech Stack Overview

The application is divided into a typical client\-server architecture, housed within a single repository:

__Frontend \(/client\)__

- __Core:__┬áReact \(scaffolded via Vite for fast builds\)\.
- __State Management:__┬áRedux Toolkit \(likely storing global user connection state and theme preferences\)\.
- __Styling & UI:__┬áTailwind CSS combined with Flowbite UI for rapid, responsive component\-driven design\.
- __Routing:__┬áReact Router v6\.
- __Authentication Service:__┬áFirebase \(specifically used to handle Google OAuth integrations\)\.

__Backend \(/api\)__

- __Core:__┬áNode\.js with Express\.js\.
- __Database:__┬áMongoDB Atlas, accessed via the Mongoose ORM\.
- __Auth & Security:__┬áJWT \(JSON Web Tokens\) sent over HttpOnly cookies, combined with┬ácookie\-parser┬áfor secure authorization\. CORS is configured explicitly for production and local environments\.
- __Media Storage:__┬áCloudinary integration for handling user and post image uploads\.

__Deployment & Hosting__

- __Infrastructure:__┬áBoth Frontend and Backend are configured to be entirely deployed on┬á__Vercel__┬á\(the backend operates using serverless functions\)\.
- __Database Hosting:__┬áMongoDB Atlas\.

≡ƒº⌐ 2\. Core Features & Implementation Details

≡ƒöÉ Authentication & Authorization \(RBAC\)

The app implements a strict Admin vs\. Normal User paradigm using JWTs\.

- __How it works:__┬áUsers can sign up via standard Email/Password or use Google OAuth via Firebase\. Upon successful login, the backend \(/api/auth\) creates a JWT containing the user's role and ID, and injects it into an HttpOnly cookie\.
- __Frontend Routing Security:__┬áReact Router uses custom wrapper components to lock down the UI:
	- <PrivateRoute />: Checks if a user is logged in\. Used to protect the┬á/dashboard\.
	- <OnlyAdminPrivateRoute />: Checks if the logged\-in user has the┬áisAdmin┬áflag\. Protects the┬á/create\-post┬áand┬á/update\-post/:postId┬ároutes\.
- __Backend Security:__┬áAPI routes \(like creating a post\) validate the JWT cookie to ensure non\-admins cannot bypass frontend protections utilizing API tools directly\.

≡ƒô¥ Content Creation & Management \(Admin Only\)

- The application restricts post authoring explicitly to Admins\.
- Admins can perform CRUD operations on posts \(Create, Read, Update, Delete\)\.
- Images embedded in blog posts are handled by sending them to Cloudinary, returning a secure URL that is saved dynamically into the MongoDB┬áPost┬ádocument\.
- Backend routes mapped under┬á/api/post\.

≡ƒÆ¼ User Engagement \(Public & Logged In\)

- __Viewing:__┬áAnyone \(even non\-authenticated visitors\) can read blog posts \(/post/:postSlug\), search for topics \(/search\), and view the Home/About/Projects pages\.
- __Commenting:__┬áLogged\-in users can participate in discussions on posts\. Comments are tied to the specific┬ápostId┬áand managed by the┬á/api/comment┬ábackend routes\.

ΓÜÖ∩╕Å Serverless Database Handling

To optimize for Vercel's serverless environment, the backend implements a clever mechanism so it doesn't leave lingering database connections\.

- Instead of a traditional persistent DB connection upon app startup, the Express app relies on a┬áconnectMiddleware┬áfunction\.
- Whenever a request hits data\-sensitive routes \(/api/user,┬á/api/auth,┬á/api/post,┬á/api/comment\), this middleware is triggered to lazily check if a connection to MongoDB is active, reusing it if present, or explicitly connecting if dropped\.

≡ƒôü 3\. Application Structure Walkthrough

__The Backend \(/api\)__

- index\.js: The entry point\. Handles setup, CORS mapping, the DB middleware logic, global error management, and links main routes\.
- /src/routes┬á&┬á/src/controllers: Separation of concerns\. Routes direct traffic for┬áuser,┬áauth,┬ápost, and┬ácomment┬áto their respective logical controllers\.
- /src/models: Defining the structure of MongoDB documents \(e\.g\.,┬áUser,┬áPost,┬áComment\)\.
- seed\.js: A specialized script that you can run locally \(node src/seed\.js\) to automatically populate the database with dummy Admins, Users, Posts, and Comments for instant testing\.

__The Frontend \(/client\)__

- App\.jsx: The top\-level root\. Here, complex route wrapping is implemented \(e\.g\.┬á<Route element=\{<OnlyAdminPrivateRoute />\}> <Route path='/create\-post'\.\.\. /> </Route>\)\.
- /pages: Dedicated views for features\. E\.g\.,┬áDashboard\.jsx┬á\(User management\),┬áPostPage\.jsx┬á\(Reading a post\),┬áCreatePost\.jsx┬á&┬áUpdatePost\.jsx┬á\(Admin CMS interface\), and┬áSearch\.jsx\.
- /components: Reusable chunks of UI, importantly the┬áHeader\.jsx,┬áFooter\.jsx, and the routing protectors to keep unauthenticated users away\.

≡ƒÜÇ Summary

Overall, this is a very well\-structured MERN application designed with modern best practices in mindΓÇöparticularly regarding how it handles cookies, protects private application state globally with Redux, and securely manages roles across a serverless deployment environment\.

Github Link :\- [https://github\.com/kartikvermajs/mern\-blog](https://github.com/kartikvermajs/mern-blog)

Live Link :\- [https://mern\-blog\-frontend\-flax\-two\.vercel\.app](https://mern-blog-frontend-flax-two.vercel.app)

