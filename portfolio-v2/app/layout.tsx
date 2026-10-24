import type { Metadata } from "next";
import { Instrument_Serif, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const displayFont = Instrument_Serif({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
});

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aloshitomshijo.vercel.app"),
  title: "Aloshi | Creative Developer & Digital Creator",
  description:
    "Aloshi Tom Shijo is a Computer Science & Engineering student at SJCET and a full-stack developer working with Python, Django, React.js, Node.js, Express.js, and MongoDB.",
  openGraph: {
    type: "website",
    title: "Aloshi Tom Shijo — Full-stack developer",
    description:
      "CSE student at SJCET building full-stack applications with Python, Django, and the MERN stack.",
    siteName: "Aloshi Tom Shijo — Portfolio",
    locale: "en_IN",
  },
  twitter: {
    card: "summary",
    title: "Aloshi Tom Shijo — Full-stack developer",
    description:
      "CSE student at SJCET building full-stack applications with Python, Django, and the MERN stack.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
      data-theme="ink"
    >
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try {
                  const saved = localStorage.getItem('portfolio-theme');
                  const theme = saved === 'ink' || saved === 'paper' ? saved : 'ink';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (error) {
                  document.documentElement.setAttribute('data-theme', 'ink');
                }
              })();
            `,
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
