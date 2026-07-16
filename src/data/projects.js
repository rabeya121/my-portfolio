export const projects = [
  {
    id: 1,
    title: "Fable",
    emoji: "📖",
   // id: 1, Fable
    image: "https://i.ibb.co.com/8n1kmz7y/Screenshot-2026-07-16-133551.png", // <-- এখানে ImgBB screenshot link বসাও
    gradient: "from-indigo-500/20 to-purple-500/20",
    description:
      "A full-stack ebook sharing platform where users can publish, browse, and purchase digital books with secure authentication and payments.",
    tech: ["Next.js", "Express.js", "MongoDB", "Better Auth", "Stripe"],
    live: "https://hridis-diary-frontend.vercel.app/",
    github: "https://github.com/rabeya121/hridi-s-diary-frontend",
    features: [
      "Google OAuth and Better Auth based secure authentication",
      "Stripe integration for seamless ebook purchases",
      "Image upload and management via imgBB API",
      "Separate client (Vercel) and server (Render) deployment architecture",
    ],
    challenges:
      "Setting up Better Auth with Google OAuth alongside custom session handling required careful configuration. Integrating Stripe payments securely on the server side while keeping the client flow smooth was another key challenge, along with managing CORS between separately deployed client and server.",
    improvements:
      "Future plans include a review/rating system for books, a recommendation engine based on reading history, author dashboards with sales analytics, and a mobile-friendly reading mode.",
  },
  {
    id: 2,
    title: "Hridi's Diary",
    emoji: "🎁",
    // id: 2, Hridi's Diary
    image: "https://i.ibb.co.com/Z6V7Q4cx/Screenshot-2026-07-16-133458.png",
    gradient: "from-pink-500/20 to-indigo-500/20",
    description:
      "A full-stack ecommerce application with a 'Velvet Gift Box' design theme, featuring secure checkout and a polished shopping experience.",
    tech: ["Next.js", "TypeScript", "Express.js", "MongoDB", "Stripe"],
    live: "https://hridis-diary-frontend.vercel.app/",
    github: "https://github.com/rabeya121/hridi-s-diary-frontend",
    features: [
      "TypeScript-based Next.js frontend with a custom Velvet Gift Box theme",
      "JWT-based authentication and secure user sessions",
      "Stripe payment gateway integration for checkout",
      "Image upload and management via imgBB API",
    ],
    challenges:
      "This was my first project using TypeScript, so setting up proper types across the frontend while integrating with an Express backend was a big learning curve. Handling Stripe checkout flow securely and managing JWT auth state across pages were also key challenges.",
    improvements:
      "Future plans include order tracking, an admin dashboard for inventory management, wishlist functionality, and email order confirmations.",
  },
  {
    id: 3,
    title: "SkillSphere",
    emoji: "📚",
    // id: 3, SkillSphere
    image: "https://i.ibb.co.com/mFF4f22D/Screenshot-2026-07-16-134106.png",
    gradient: "from-indigo-500/20 to-purple-500/20",
    description:
      "A full-featured online learning platform where students can browse, enroll in, and complete courses with a seamless user experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    live: "https://skill-sphere-brown.vercel.app/",
    github: "https://github.com/rabeya121",
    features: [
      "User authentication with secure login and registration system",
      "Dynamic course listings with search and filter functionality",
      "Responsive UI built with React and Tailwind CSS for all screen sizes",
      "Role-based access for students and instructors",
    ],
    challenges:
      "Implementing role-based access control cleanly across both client and server was the trickiest part. Managing JWT tokens and ensuring secure route protection required careful architecture. Building a dynamic search/filter system with multiple criteria while keeping performance smooth was another key challenge.",
    improvements:
      "Future plans include adding video streaming support, a real-time chat system between students and instructors, payment gateway integration, and mobile app development with React Native.",
  },
  {
    id: 4,
    title: "IdeaVault",
    emoji: "💡",
  // id: 4, IdeaVault
    image: "https://i.ibb.co.com/0p7rctmy/Screenshot-2026-07-16-133818.png",
    gradient: "from-purple-500/20 to-teal-500/20",
    description:
      "A collaborative idea management platform where users can capture, organize, and share ideas with others in a structured and intuitive interface.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    live: "https://ideavault-client-beta.vercel.app",
    github: "https://github.com/rabeya121/ideavault-client",
    features: [
      "Submit and browse ideas with category-based organization",
      "User authentication with profile management",
      "Voting and interaction system for community-driven idea ranking",
      "Responsive design with clean component-based architecture",
    ],
    challenges:
      "Designing the voting/interaction system to prevent duplicate votes while keeping the UI snappy required both server-side validation and optimistic UI updates on the client. Managing complex MongoDB aggregation queries for trending ideas was also a significant learning curve.",
    improvements:
      "Future enhancements include real-time updates with WebSockets, a comment/discussion thread system, email notifications, and an admin dashboard for content moderation.",
  },
  {
    id: 5,
    title: "KeenKeeper",
    emoji: "✅",
    // id: 5, KeenKeeper
    image: "https://i.ibb.co.com/jksMgygv/Screenshot-2026-07-16-133925.png",
    gradient: "from-teal-500/20 to-indigo-500/20",
    description:
      "An intuitive task and note management web application that helps users organize their daily activities efficiently.",
    tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS"],
    live: "https://keen-keeper-umber.vercel.app",
    github: "https://github.com/rabeya121",
    features: [
      "Create, edit, and delete tasks with an easy-to-use interface",
      "Organize tasks into categories with priority labeling",
      "Persistent state management for seamless user experience",
      "Clean, minimalistic component architecture with reusable UI elements",
    ],
    challenges:
      "Building a performant state management system without a backend was challenging. Ensuring that component re-renders were optimized and that state stayed consistent across the app required careful use of React hooks and context API.",
    improvements:
      "Plans include adding backend persistence with a Node/MongoDB stack, collaborative features (shared task lists), deadline reminders with notifications, and a Kanban board view.",
  },
];
