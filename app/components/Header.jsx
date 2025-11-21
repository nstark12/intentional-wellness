"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  const darkBrown = "#2b211c"; // deep grounding brown
  const warmBrown = "#5d4a3c"; // lighter brown for text
  const hoverBg = "#e8dcd3"; // light warm neutral on hover
  const borderColor = "#d1b59a";

  const navLinks = [
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    {
      href: "https://us.fullscript.com/welcome/jlauersdorf",
      label: "Supplements",
    },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className="border-b backdrop-blur bg-[#fdf6f0]/95"
      style={{ borderColor }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Brand */}
        <Link href={"/"}>
          <div className="flex">
            <Image
              src={"/logo.webp"}
              height={100}
              width={200}
              alt="Intentional wellness logo"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav
          className="hidden md:flex items-center gap-4 lg:gap-6 text-sm"
          style={{ color: warmBrown }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 rounded-full transition-all duration-200"
              style={{
                borderRadius: "9999px",
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = hoverBg;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#schedule"
            className="rounded-full px-4 py-2 text-xs font-medium uppercase transition-all duration-200"
            style={{
              border: `1px solid ${borderColor}`,
              color: darkBrown,
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = hoverBg;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "transparent";
            }}
          >
            Free Intro Call
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full p-2"
          style={{
            border: `1px solid ${borderColor}`,
            color: darkBrown,
          }}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav
          className="md:hidden border-t bg-[#fff9f4]"
          style={{ borderColor }}
        >
          <div
            className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 text-sm"
            style={{ color: warmBrown }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-2 rounded-full transition-all duration-200"
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = hoverBg;
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                }}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#schedule"
              onClick={closeMenu}
              className="mt-2 px-4 py-2 rounded-full text-xs font-semibold uppercase text-center transition-all duration-200"
              style={{
                border: `1px solid ${borderColor}`,
                color: darkBrown,
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = hoverBg;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "transparent";
              }}
            >
              Free Intro Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
