import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <section className="py-12 md:py-20 bg-black ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 mb-16">
          <div className="w-full lg:w-4/12 xl:w-5/12 px-4 mb-8 lg:mb-0">
            <Image
              src={"/logo-text-white.svg"}
              alt="innographics logo"
              width={250}
              height={18}
              className="cursor-pointer"
            />
          </div>
          <div className="w-full lg:w-8/12 xl:w-7/12 px-4">
            <ul className="flex flex-wrap -mb-2 items-center lg:justify-end">
              <li className="mb-2 mr-14">
                <a
                  className="inline-block text-white hover:text-gray-400"
                  href="#"
                >
                  About us
                </a>
              </li>
              <li className="mb-2 mr-14">
                <a
                  className="inline-block text-white hover:text-gray-400"
                  href="#"
                >
                  Prijzen
                </a>
              </li>
              <li className="mb-2 mr-14">
                <a
                  className="inline-block text-white hover:text-gray-400"
                  href="#"
                >
                  Contact
                </a>
              </li>
              <li className="mb-2 mr-14">
                <a
                  className="inline-block text-white hover:text-gray-400"
                  href="#"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 items-center">
          <div className="w-full sm:w-1/2 px-4 mb-6 sm:mb-0">
            <span className="text-sm text-coolGray-600">
              © 2024 Qweb Design
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
