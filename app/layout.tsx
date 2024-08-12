// import CookieConsent from "@/components/global/cookie-consent";
"use client";

import Navbar from "@/components/global/navbar";
import "./globals.css";
import Footer from "@/components/global/footer";

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="font-montserrat">
        <Navbar />
        {children}
        {/* <CookieConsent /> */}
        <Footer />
      </body>
    </html>
  );
}
