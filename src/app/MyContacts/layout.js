export const metadata = {
  title: "My Contacts",
  description: "My Contacts page provides multiple ways to get in touch with me easily. You can contact me via email, phone, or social media platforms for web development projects, collaborations, or freelance opportunities. I’m always open to discussing new ideas, creative solutions, and professional partnerships.",
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
