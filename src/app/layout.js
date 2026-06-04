// import "./globals.css";

// export const metadata = {
//   title: "Rabeya Khatun | Frontend Developer",
//   description: "Junior Frontend Developer & MERN Stack enthusiast",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body style={{ background: "#0b1326", color: "white", margin: 0 }} suppressHydrationWarning>
//         {children}
//       </body>
//     </html>
//   );
// }


import "./globals.css";

export const metadata = {
  title: "Rabeya Khatun | Frontend Developer",
  description: "Junior Frontend Developer & MERN Stack enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#0b1326", color: "white", margin: 0 }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
