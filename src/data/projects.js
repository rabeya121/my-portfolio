export const projects = [
  {
    id: 1,
    title: "SkillSphere",
    emoji: "📚",
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
    id: 2,
    title: "KeenKeeper",
    emoji: "✅",
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
  {
    id: 3,
    title: "IdeaVault",
    emoji: "💡",
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
];
