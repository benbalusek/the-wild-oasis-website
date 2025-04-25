"use client";

import Guest from "@/app/_components/Guest";
import Spinner from "@/app/_components/Spinner";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Suspense, useEffect, useRef, useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close Hamburger Icon when clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="z-10 text-xl">
      <ul className="hidden md:flex gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Suspense fallback={<Spinner />}>
            <Guest />
          </Suspense>
        </li>
      </ul>

      {/* Hamburger and Close Buttons */}
      <button
        ref={buttonRef}
        className="md:hidden cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && (
        // Nav Links for small screens
        <ul
          ref={menuRef}
          className="absolute right-0 top-8 backdrop-blur-sm bg-accent-400/80 shadow-lg rounded p-4 flex flex-col gap-4 z-50 md:hidden mt-7 mr-9"
        >
          <li>
            <Link
              href="/cabins"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent-400 transition-colors"
            >
              Cabins
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:text-accent-400 transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Suspense fallback={<Spinner />}>
              <Guest />
            </Suspense>
          </li>
        </ul>
      )}
    </nav>
  );
}
