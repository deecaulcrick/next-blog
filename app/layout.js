import { Analytics } from "@vercel/analytics/react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

export const metadata = {
  title: "Dee Caulcrick's Website",
  description: "A blog on computer science and web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="app-body">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
