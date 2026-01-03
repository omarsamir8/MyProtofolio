export const metadata = {
  title: "Services",
  description: "The Services section outlines the professional web development services I offer, including frontend development, backend development, and full-stack solutions. I focus on building responsive, high-performance, and scalable web applications tailored to client needs.",
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
