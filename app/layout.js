import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

// Load Google Fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

// Default metadata (SEO + OG + Twitter)
export const metadata = {
  title: {
    default: "Inspire Hub",
    template: "%s | Inspire Hub", // Dynamic title
  },
  description:
    "Your daily source of motivation, coding tips, finance hacks, travel inspiration, and fun blogs.",
  keywords: [
    "motivation",
    "coding",
    "finance",
    "travel",
    "fun",
    "blogs",
    "self-growth",
  ],
  authors: [{ name: "Inspire Hub Team" }],
  openGraph: {
    title: "Inspire Hub",
    description:
      "Your daily source of motivation, coding tips, finance hacks, travel inspiration, and fun blogs.",
    url: "https://inspire-hub.vercel.app", // change when deployed
    siteName: "Inspire Hub",
    images: [
      {
        url: "/og-image.png", // place this in /public
        width: 1200,
        height: 630,
        alt: "Inspire Hub Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inspire Hub",
    description:
      "Your daily source of motivation, coding tips, finance hacks, travel inspiration, and fun blogs.",
    images: ["/og-image.png"],
    creator: "@yourhandle", // optional
  },
  metadataBase: new URL("https://inspire-hub.vercel.app"), // base for canonical URLs
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${robotoMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* Wrapper */}
        <main className="max-w-6xl mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  );
}

