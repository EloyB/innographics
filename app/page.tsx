"use client";

import { projects, testimonials } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { BiArrowFromBottom } from "react-icons/bi";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Home() {
  const [selectedTesimonial, setSelectedTesimonial] = useState(testimonials[0]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="container mx-auto px-8 py-16">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12 px-4 mb-6 lg:mb-0">
            <div className="flex flex-col h-full">
              <div className="block w-full h-[400px] mb-6 rounded-3xl bg-gray-400"></div>
              <div className="p-10 bg-white rounded-3xl flex flex-col space-y-20">
                <h1 className="max-w-xs md:max-w-md font-heading text-5xl sm:text-7xl mb-4 tracking-tighter">
                  Als muren konden praten...
                </h1>
                <div className="max-w-sm">
                  <p>
                    <span className="block">
                      Een printbedrijf gesettled in de stille kempen.
                    </span>
                    <span className="block">
                      Gefocust op het printen van allerhande ondergronden in
                      diverse groottes.
                    </span>
                    <span className="block">
                      U bedenkt het, wij printen het!
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-7/12 px-4">
            <div className="relative h-[500px] lg:h-full">
              <div className="block h-full w-full rounded-3xl bg-gray-400"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote */}
      <section className="bg-white py-24">
        <p className="mx-auto px-8 max-w-xl text-center text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea sit eaque
          totam aliquid veritatis assumenda temporibus harum unde!
        </p>
      </section>
      {/* Projecten */}
      <section className="py-12 md:py-24 bg-gray-50 ">
        <div className="container mx-auto px-8 lg:px-0">
          <div className="max-w-lg lg:max-w-none mb-20">
            <div className="flex flex-wrap items-end">
              <div className="w-full 2xl:w-7/12">
                <div className="inline-flex mx-auto items-start">
                  <h1 className="font-heading text-5xl md:text-6xl lg:text-10xl tracking-tighter pt-4">
                    Projecten
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="md:max-w-xl mx-auto lg:max-w-none">
            <div className="mb-20">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <div key={index} className="w-full mb-20 lg:mb-0">
                    <a className="group block" href="#">
                      <div className="relative h-96 mb-8 rounded-5xl overflow-hidden">
                        <div className="absolute left-0 top-0 h-full w-full rounded-3xl group-hover:bg-opacity-10 group-hover:bg-black transition duration-200"></div>
                        <div className="w-full h-full bg-gray-400 rounded-3xl"></div>
                        {/* <img
                          className="block w-full h-full object-cover"
                          src={project.imgUrl}
                          alt=""
                        /> */}
                      </div>
                      <div className="max-w-xs">
                        <h3 className="text-3xl mb-6 tracking-tight leading-none">
                          {project.title}
                        </h3>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-0">
          <div className="flex mb-10 lg:mb-32 items-center">
            <div className="w-full sm:w-1/2 px-4 mb-8 sm:mb-0">
              <h1 className="font-heading text-5xl md:text-6xl lg:text-10xl tracking-tighter pt-4">
                FAQ
              </h1>
            </div>
            <div className="hidden sm:block w-full sm:w-1/2 px-4 text-right">
              <a
                className="group inline-flex items-center justify-center py-5 px-8 text-base leading-none border-2 border-black font-medium text-black hover:text-white hover:bg-black rounded-full transition duration-200"
                href="#"
              >
                <span className="mr-4">Go to all questions</span>
                <IoIosArrowRoundForward className="w-6 h-auto" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
              <div className="h-full py-12 px-6 lg:px-8 xl:px-12 border rounded-3xl mx-auto">
                <h4 className="text-2xl xl:text-3xl mb-8">
                  What if my business partner doesn&apos;t appear in search
                  results when I try to add them as?
                </h4>
                <a
                  className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black"
                  href="#"
                >
                  <span className="mr-4">Learn more</span>
                  {/* arrow icon */}
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-6 lg:mb-0">
              <div className="h-full py-12 px-6 lg:px-8 xl:px-12 border rounded-3xl mx-auto">
                <h4 className="text-2xl xl:text-3xl mb-8">
                  Do I need to use the Paid Partnership label for things like
                  free trips or gifted product?
                </h4>
                <a
                  className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black"
                  href="#"
                >
                  <span className="mr-4">Learn more</span>
                  {/* arrow icon */}
                </a>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
              <div className="h-full py-12 px-6 lg:px-8 xl:px-12 border rounded-3xl mx-auto">
                <h4 className="text-2xl xl:text-3xl mb-8">
                  How can I enable brands to promote my posts?
                </h4>
                <a
                  className="group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black"
                  href="#"
                >
                  <span className="mr-4">Learn more</span>
                  {/* arrow icon */}
                </a>
              </div>
            </div>
          </div>
          <div className="block sm:hidden w-full px-4 mt-8">
            <a
              className="group inline-flex items-center justify-center py-5 px-8 text-base leading-none border-2 border-black font-medium text-black hover:text-white hover:bg-black rounded-full transition duration-200"
              href="#"
            >
              <span className="mr-4">Go to all questions</span>
              <IoIosArrowRoundForward className="w-6 h-auto" />
            </a>
          </div>
        </div>
      </section>
      <section className="relative py-36 bg-black overflow-hidden">
        <Image
          className="top-0 left-0 w-full h-full object-cover bg-black bg-opacity-30 z-30"
          src="/cta-banner.jpg"
          alt="call to action"
          layout="fill"
        />
        <div className="relative container mx-auto px-4 z-40">
          <div className="lg:max-w-3xl mx-auto text-center">
            <h1 className="font-heading text-5xl sm:text-8xl xl:text-10xl text-white tracking-tighter mb-14">
              Laat je creativiteit de vrije loop
            </h1>
            <a
              className="group inline-flex mb-3 sm:mb-0 sm:mr-4 py-5 px-8 text-black hover:text-white leading-none items-center justify-center bg-white hover:bg-black rounded-full transition duration-150"
              href="#"
            >
              <span className="mr-2.5">Vraag offerte aan</span>
              <span>
                <IoIosArrowRoundForward className="w-6 h-auto" />
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
