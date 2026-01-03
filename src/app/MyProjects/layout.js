export const metadata = {
  title: "Projects",
  description: "The Projects section showcases a diverse collection of frontend, backend, and full-stack projects built with modern technologies. Each project represents a unique idea, focusing on performance, scalability, responsive design, and real-world problem solving.",
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
