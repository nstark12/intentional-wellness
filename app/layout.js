// app/layout.jsx
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

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
        <main className="min-h-screen flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
