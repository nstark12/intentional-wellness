// app/layout.jsx
import "./globals.css";
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";

export const metadata = {
  title: "Intentional Wellness",
  description:
    "Nurse-led holistic care that feels warm, intentional, and grounded.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#fdf6f0] text-[#2b211c]">
        <Header />
        <main className="mx-auto max-w-7xl px-4 pt-0 pb-10 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
