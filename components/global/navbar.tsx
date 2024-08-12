import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="container mx-auto px-8 bg-transparent">
          <div className="flex h-24 items-center">
            <Image
              src={"/logo-text.svg"}
              alt="innographics logo"
              width={250}
              height={18}
            />
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden py-1 ml-auto"
            >
              <TbMenu className="w-8 h-auto" />
            </button>
            <div className="hidden lg:flex ml-auto mr-12 items-center">
              <Link
                className="inline-block hover:underline mr-10"
                href="/about-us"
              >
                Over ons
              </Link>
              <a className="inline-block hover:underline mr-10" href="#">
                Prijzen
              </a>
              <Link
                className="inline-block hover:underline mr-10"
                href="/contact"
              >
                Contact
              </Link>
              <Link className="inline-block hover:underline" href="/faq">
                FAQ
              </Link>
            </div>
            <a
              className="group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200"
              href="#"
            >
              <span className="mr-2">Offerte aanvragen</span>
              {/* arrow icon */}
            </a>
          </div>
        </div>
      </nav>

      <div
        className={cn(
          "fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 hidden",
          `${open ? "block" : "hidden"}`
        )}
      >
        <div
          onClick={() => setOpen(!open)}
          className="fixed inset-0 bg-gray-800 opacity-50"
        ></div>
        <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white overflow-y-auto">
          <div className="flex mb-auto items-center">
            <a className="inline-block mr-auto" href="#">
              <img
                className="h-4"
                src="asitrastudio-assets/logos/logo-asi.svg"
                alt=""
              />
            </a>
            <button>{/* close icon */}</button>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <Link className="inline-block text-black" href="#">
                  About
                </Link>
              </li>
              <li className="mb-6">
                <Link className="inline-block text-black" href="#">
                  Services
                </Link>
              </li>
              <li className="mb-6">
                <Link className="inline-block text-black" href="#">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="inline-block text-black" href="#">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
