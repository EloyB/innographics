import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { TbMenu } from "react-icons/tb";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <nav>
        <div className="container mx-auto px-8 bg-transparent">
          <div className="flex h-24 items-center">
            <Image
              onClick={() => router.push("/")}
              src={"/logo-text.svg"}
              alt="innographics logo"
              width={250}
              height={18}
              className="cursor-pointer"
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
              <Link className="inline-block hover:underline" href="/faq">
                FAQ
              </Link>
            </div>
            <a
              className="group hidden lg:inline-flex py-4 px-8 items-center justify-center leading-none font-medium text-black hover:text-white border border-black rounded-full hover:bg-black transition duration-200"
              href="/contact"
            >
              <span className="mr-2">Contacteer ons</span>
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
            <button onClick={() => setOpen(false)}>
              <IoClose />
            </button>
          </div>
          <div className="py-12 mb-auto">
            <ul className="flex-col">
              <li className="mb-6">
                <Link
                  onClick={() => setOpen(false)}
                  className="inline-block text-black"
                  href="/about-us"
                >
                  Over ons
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  onClick={() => setOpen(false)}
                  className="inline-block text-black"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
              <li className="mb-6">
                <Link
                  onClick={() => setOpen(false)}
                  className="inline-block text-black"
                  href="/faq"
                >
                  FAQ
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
