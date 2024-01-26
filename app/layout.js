import { GeistSans } from "geist/font/sans";
import { CookieBanner } from "@/components/cookieBanner";

import Head from "next/head";
import Script from "next/script";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/scss/bootstrap.scss";

export const metadata = {
  title: "Jens Kock",
  description:
    "Come check out how Jens Kock can help you with all your IT needs. Jens offers a comprehensive overview of top-tier IT services and consulting, tailored to empower your business's technological infrastructure. From cloud computing and data management, to personalized consulting services to optimize your IT strategies, Jens Kock is your partner in navigating the complex world of technology. Dive into my resourceful blog",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />
        {/* <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        /> */}
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous"
      />

      <html lang="en">
        <body className={GeistSans.className}>
          <Navbar />
          {children}
          <CookieBanner suppressHydrationWarning />
          <Footer />
        </body>
      </html>
    </>
  );
}
