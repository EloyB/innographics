import FaqItem from "@/components/global/faq-item";
import React from "react";

const Faq = () => {
  return (
    <>
      <section className="py-12 md:py-24 bg-coolGray-50 ">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-6xl sm:text-8xl md:text-10xl tracking-tighter mb-20">
            FAQ
          </h1>
          <div className="flex flex-wrap -mx-4 mb-20">
            <FaqItem
              question="What kind of returns can I expect with wine investment?"
              answer="Returns vary based on wine quality, market conditions, and investment duration, historically offering attractive long-term returns."
            />
            <FaqItem
              question="What kind of returns can I expect with wine investment?"
              answer="Returns vary based on wine quality, market conditions, and investment duration, historically offering attractive long-term returns."
            />
            <FaqItem
              question="What kind of returns can I expect with wine investment?"
              answer="Returns vary based on wine quality, market conditions, and investment duration, historically offering attractive long-term returns."
            />
            <FaqItem
              question="What kind of returns can I expect with wine investment?"
              answer="Returns vary based on wine quality, market conditions, and investment duration, historically offering attractive long-term returns."
            />
            <FaqItem
              question="What kind of returns can I expect with wine investment?"
              answer="Returns vary based on wine quality, market conditions, and investment duration, historically offering attractive long-term returns."
            />
            <FaqItem
              question="What kind of returns can I expect with wine investment?"
              answer="Returns vary based on wine quality, market conditions, and investment duration, historically offering attractive long-term returns."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
