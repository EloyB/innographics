import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div>
      <section className="py-12 md:py-24 bg-coolGray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl px-8 mb-20 mx-auto text-center">
            <p className="text-xl lg:text-2xl tracking-tight mb-10">
              <span>
                Een echt kempisch product van 2 gedreven ondernemens. Waar een
                passie voor ondernemen en creativiteit zich ontwikkeld in het
                opstarten van een eigen business. Dit is Innographics.
              </span>
            </p>
          </div>
          <div className="max-w-sm mx-auto sm:max-w-none">
            <div className="flex flex-wrap"></div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 bg-coolGray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4 items-center mb-10">
            <div className="w-full lg:w-8/12 xl:w-1/2 px-4 lg:mb-0">
              <h1 className="font-heading text-6xl md:text-10xl tracking-tighter">
                Meet the team
              </h1>
            </div>
          </div>
          <div className="transition-transform duration-500 ease-in-out">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="flex-shrink-0 mr-6 xl:mr-12 w-full max-w-md">
                {/* <Image
                  className="block mb-8"
                  src="/asitrastudio-assets/team/people-big-circle1.png"
                  width={250}
                  height={250}
                  alt="Joost"
                /> */}
                <div className="h-[250px] w-full md:w-[250px] bg-gray-400 rounded-3xl mb-4"></div>
                <div className="max-w-sm">
                  <span className="text-sm text-coolGray-600">Oprichter</span>
                  <h4 className="text-3xl mt-1 mb-6">Joost De Bie</h4>
                  <p className="text-lg text-coolGray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
              <div className="flex-shrink-0 mr-6 xl:mr-12 w-full max-w-md">
                {/* <Image
                  className="block mb-8"
                  src="/asitrastudio-assets/team/people-big-circle2.png"
                  width={250}
                  height={250}
                  alt="Senne"
                /> */}
                <div className="h-[250px] w-full md:w-[250px] bg-gray-400 rounded-3xl mb-4"></div>
                <div className="max-w-sm">
                  <span className="text-sm text-coolGray-600">Oprichter</span>
                  <h4 className="text-3xl mt-1 mb-6">Senne Vercammen</h4>
                  <p className="text-lg text-coolGray-500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
