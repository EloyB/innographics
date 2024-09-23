import React from "react";
import { FiFacebook, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

const Contact = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 xl:w-5/12 px-4 mb-16 lg:mb-0">
            <div className="max-w-lg mx-auto lg:mx-0">
              <h1 className="font-heading text-6xl xs:text-8xl sm:text-9xl xl:text-10xl tracking-tighter mb-20">
                Let&apos;s talk
              </h1>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-8 md:gap-10">
                <div className="sm:flex bg-white md:bg-transparent md:p-0 rounded-3xl p-8">
                  <div className="flex h-12 w-12 items-center justify-center border border-coolGray-400 rounded-2xl">
                    <FiMail />
                  </div>
                  <div className="mt-6 sm:mt-0 sm:ml-6">
                    <span className="block text-lg font-semibold mb-5">
                      Email ons
                    </span>
                    <span className="text-lg font-medium">
                      info@innographics.be
                    </span>
                  </div>
                </div>
                <div className="sm:flex bg-white md:bg-transparent md:p-0 rounded-3xl p-8">
                  <div className="flex h-12 w-12 items-center justify-center border border-coolGray-400 rounded-2xl">
                    <FiPhone />
                  </div>
                  <div className="mt-6 sm:mt-0 sm:ml-6">
                    <span className="block text-lg font-semibold mb-5">
                      Bel ons
                    </span>
                    <span className="text-lg font-medium">+48 291 821 114</span>
                  </div>
                </div>
                <div className="sm:flex bg-white md:bg-transparent md:p-0 rounded-3xl p-8">
                  <div className="flex h-12 w-12 items-center justify-center border border-coolGray-400 rounded-2xl">
                    <FiFacebook />
                  </div>
                  <div className="mt-6 sm:mt-0 sm:ml-6">
                    <span className="block text-lg font-semibold mb-5">
                      Facebook
                    </span>
                    <span className="text-lg font-medium">Innographics</span>
                  </div>
                </div>
                <div className="sm:flex bg-white md:bg-transparent md:p-0 rounded-3xl p-8">
                  <div className="flex h-12 w-12 items-center justify-center border border-coolGray-400 rounded-2xl">
                    <FiLinkedin />
                  </div>
                  <div className="mt-6 sm:mt-0 sm:ml-6">
                    <span className="block text-lg font-semibold mb-5">
                      LinkedIn
                    </span>
                    <span className="text-lg font-medium">Innographics</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-7/12 px-4">
            <div className="max-w-lg lg:max-w-none mx-auto py-12 px-8 md:px-10 bg-white rounded-3xl">
              <h3 className="text-3xl tracking-tight mb-8">Contact Us</h3>
              <form action="">
                <input
                  className="block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full"
                  type="text"
                  placeholder="First Name*"
                />
                <input
                  className="block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full"
                  type="text"
                  placeholder="Last Name*"
                />
                <input
                  className="block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full"
                  type="email"
                  placeholder="E-mail"
                />
                <input
                  className="block w-full py-4 px-8 h-16 mb-6 text-coolGray-500 bg-white border border-coolGray-400 rounded-full"
                  type="text"
                  placeholder="Phone number"
                />
                <textarea
                  className="w-full h-52 py-5 px-8 text-coolGray-500 bg-white border border-coolGray-400 rounded-3xl resize-none mb-8"
                  placeholder="Message"
                  rows={3}
                ></textarea>
                <div className="sm:text-right">
                  <button
                    className="inline-block w-full sm:w-auto py-5 px-8 sm:px-24 text-center font-medium text-white leading-none bg-black hover:bg-blue-500 rounded-full transition duration-150"
                    type="submit"
                  >
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
