import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Samuel Ford: Software Developer",
  description: "Experienced Full Stack Developer specializing in JavaScript, React, and modern web development.",
  keywords: ['Freelance Developer', 'JavaScript Developer', 'Web Development', 'React Developer', 'Full Stack Developer', 'Frontend Developer', 'Backend Developer'],
  openGraph: {
      title: 'Samuel Ford: Software Developer',
      description: "Experienced Full Stack Developer specializing in JavaScript, React, and modern web development.",
      url: 'https://www.samueljford.com/',
      siteName: 'Samuel Ford: Software Developer',
      images: [
        {
          url: '/meta_preview.png', 
          width: 1200,
          height: 630,
        }
      ],
      locale: 'en_US',
      type: 'website',
    }

};

export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className={inter.className}>{children}
      <Analytics />
      <SpeedInsights />
      </body>
    </html>
  );
}
