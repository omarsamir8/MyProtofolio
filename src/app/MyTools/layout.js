export const metadata = {
  title: "Tools & Skiils",
  description: "The Tools & Skills section highlights the technologies, frameworks, and tools I use to build modern, scalable web applications. It reflects my expertise in frontend, backend, and full-stack development, focusing on performance, clean code, and best practices.",
};
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>   
          {children}              
      </body>
    </html>
  );
}
