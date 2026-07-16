import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rabeya Khatun | Frontend & MERN Stack Developer",
  description: "Junior Frontend & MERN Stack Developer from Dhaka, Bangladesh. Building modern web apps with React, Next.js, Node.js & MongoDB.",
  openGraph: {
    title: "Rabeya Khatun | Frontend & MERN Stack Developer",
    description: "Junior Frontend & MERN Stack Developer from Dhaka, Bangladesh.",
    url: "https://rabeya-portfolio.vercel.app",
    images: [{ url: "/og-image.png" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ background: "#0b1326", color: "white", margin: 0 }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}