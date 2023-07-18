import React, { useState } from "react";
import { cx } from "class-variance-authority";

const FAQ = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-purple-950 text-white">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold">
                FAQ
              </span>
              <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl ">
                Do you have any questions?
              </h2>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="I don’t feel experienced yet. Should I still apply?"
              text="Definitely. Our program is designed to equip you with all relevant knowledge and to make your founding experience as convenient as possible."
            />
            <AccordionItem
              header="Can I apply with a team?"
              text="Yes, you can, we will consider your application then as a team application. "
            />
            <AccordionItem
              header="Do I need to be enrolled at a university?"
              text="No. We want to make founding accessible to everyone and fair. Regardless of your background, we would like to help you with founding your AI startup."
            />
            <AccordionItem
              header="My idea is not AI related. Can I still apply?"
              text="Unfortunately, no. Your startup idea has to be related to artificial intelligence."
            />
            <AccordionItem
              header="When will the application open?"
              text="The application will open on 01.08.2023."
            />
            <AccordionItem
              header="When is the application deadline?"
              text="The application phase closes on 31.08.2023 at 23:59. "
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="What if I don’t find a team during the first week of the AI E-Lab?"
              text="No worries, if you don’t find a team, you’ll still be able to continue your journey in the E-Lab."
            />
            <AccordionItem
              header="Do I have to be located in Munich during the program or can I join remotely?"
              text="Since we organize in-person activities, participants need to be present in Munich during these activities."
            />
            <AccordionItem
              header="Am I legally bound to TUM.ai or a partner company?"
              text="No. We are equity-free and do not want a share in your startup. You only need to invest your dedication and eagerness and we would like to help you with your AI startup."
            />
            <AccordionItem
              header="What is the time commitment for this program?"
              text="The AI E-Lab is a part-time program. Keep in mind that the more you commit, the more you get out of this program. "
            />
            <AccordionItem
              header="You still have other questions?"
              text="We got you. Send us a mail at venture@tum-ai.com!"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ header, text }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div
      className="single-faq z-0 mb-8 w-full rounded-lg p-4 text-white sm:p-6 lg:px-6 xl:px-8"
      style={{
        backgroundImage: "linear-gradient(to right, #eab308, #ef4444)",
        backgroundClip: "border-box",
        boxDecorationBreak: "clone",
      }}
    >
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={() => handleToggle()}
      >
        <div className="mr-5 flex h-6 w-full max-w-[40px] items-center justify-center rounded-lg ">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill="white"
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="text-lg font-semibold text-white">{header}</h4>
        </div>
      </button>

      <div
        className={`duration-200 ease-in-out ${active ? "block" : "hidden"}`}
      >
        <p className="text-body-color py-3 text-base leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

export default FAQ;
