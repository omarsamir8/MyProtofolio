export const metadata = {
  title: "Educations",
  description: "The Educations section highlights my academic background, degrees, and continuous learning journey. It showcases my formal education, technical studies, and relevant training that support my expertise in web development and modern technologies.",
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
