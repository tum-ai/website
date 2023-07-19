import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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
              header="When will the application phase begin?"
              text="The application phase will begin on 01.08.2023."
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
          </div>
        </div>
      </div>
    </section>
  );
};

const AccordionItem = ({ header, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4">
      <button
        className="flex items-center justify-between w-full px-4 py-3 text-left text-lg font-semibold bg-purple-900 rounded-lg focus:outline-none focus:shadow-outline-purple"
        onClick={toggleAccordion}
      >
        <span>{header}</span>
        <FontAwesomeIcon icon={faChevronDown} className={cx(`ml-2 transition-transform duration-200 transform`, isOpen ? "rotate-180" : "")} />
      </button>
      <div
        className={cx(`duration-200 ease-in-out px-4 py-3 text-white`, isOpen ? "block" : "hidden")}

      >
        {text}
      </div>
    </div>
  );
};
export default FAQ;
