import Header2 from "../components/02_molecules/Header2.js";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Industry() {
  const [activeTab, setActiveTab] = useState("tab1");
  const partners = [
    { href: "https://www.atoss.com/de", src: "/assets/industry/ATOSS.png" },
    {
      href: "https://www.hypovereinsbank.de",
      src: "/assets/industry/HVB_2.png",
      alt: "atoss",
    },
    {
      href: "https://www.infineon.com/cms/de/",
      src: "/assets/industry/infineon_logo.png",
      alt: "infineon",
    },
    {
      href: "https://www.prosiebensat1.com",
      src: "/assets/industry/P7S1_transparent.png",
      alt: "prosiebensat1",
    },
    {
      href: "https://www.sportortho.mri.tum.de",
      src: "/assets/industry/MRI.png",
      alt: "",
    },
    {
      href: "https://neuralprophet.com",
      src: "/assets/industry/neuralprophet_logo.png",
    },
    { href: "https://eyeo.com", src: "/assets/industry/eyeo.png" },
    {
      href: "https://gruppe.schwarz",
      src: "/assets/industry/schwarzgroup_edit.png",
    },
    {
      href: "https://www.rohde-schwarz.com/de",
      src: "/assets/industry/RandS.png",
    },
  ];

  return (
    <>
      <Header2
        imageSrc={"/assets/industry/industry_header.svg"}
        title={undefined}
        subtitle={undefined}
      />
      <div>
        <ul className="flex overflow-hidden">
          <li
            className={`${
              activeTab === "tab1" ? "w-3/5" : "w-2/5"
            } transform transition-all duration-200 ease-in-out`}
          >
            <button
              className={`w-full rounded px-4 py-2 text-center text-lg font-bold ${
                activeTab === "tab1"
                  ? "border border-b-2 border-transparent bg-gradient-to-r from-primary-800 from-10% to-primary-500 to-80% text-white"
                  : "border border-b-2 border-transparent border-b-primary-500 bg-white text-primary-900 hover:border-gray-300 hover:border-b-primary-500"
              } transition-all duration-500`}
              onClick={() => setActiveTab("tab1")}
            >
              For Students
            </button>
          </li>
          <li
            className={`${
              activeTab === "tab2" ? "w-3/5" : "w-2/5"
            } transform transition-all duration-200 ease-in-out`}
          >
            <button
              className={`w-full rounded px-4 py-2 text-center text-lg font-bold ${
                activeTab === "tab2"
                  ? "border border-b-2 border-transparent bg-gradient-to-l from-primary-800 from-10% to-primary-500 to-80% text-white"
                  : "border border-b-2 border-transparent border-b-primary-500 bg-white text-primary-900 hover:border-gray-300 hover:border-b-primary-500"
              } transition-all duration-500`}
              onClick={() => setActiveTab("tab2")}
            >
              For Industry
            </button>
          </li>
        </ul>
        <div className="mt-8">
          {activeTab === "tab1" && (
            <>
              <section
                id="recordings"
                className="mx-16 my-14 flex animate-fadeIn justify-center rounded-3xl bg-gray-50 py-14"
              >
                <div className="mx-2 px-2 sm:px-4 lg:px-8 xl:px-16">
                  <h1 className="mb-14 bg-gradient-to-r from-primary-800 from-10% via-primary-500 via-40% to-primary-300 to-80% bg-clip-text text-center text-4xl font-bold uppercase text-transparent">
                    Your stepping stone to a career in AI
                  </h1>
                  <div className="grid grid-cols-1 gap-0 px-8 md:grid-cols-2 lg:px-16">
                    <div className="px-12">
                      <h2 className="mb-6 text-2xl font-bold">
                        Applications for Industry Phase 5.0 will open in summer
                      </h2>
                      <p className="mb-8 text-2xl">
                        Push ML boundaries and progress your career with our AI
                        projects!{" "}
                        <strong className="text-primary-500">
                          Leverage your skills
                        </strong>{" "}
                        and take on real AI projects to test your abilities.
                        Join us now!
                        <br />
                        <br />
                        Work in a{" "}
                        <strong className="text-primary-500">
                          team of 4x students for 12 weeks, earn 2700€
                        </strong>{" "}
                        and gain valuable contacts. With a project lead guiding
                        you, demonstrate your agile project management skills in
                        a professional setting.
                        <br />
                        <br />
                        Collaborate with pre-selected partners, including{" "}
                        <strong className="text-primary-500">
                          for-profit companies, startups, and non-profits,
                        </strong>{" "}
                        in our upcoming Industry Phase 5.0 starting September
                        2023.
                      </p>
                    </div>
                    <div className="relative flex flex-col items-center px-12 text-center">
                      <div className="relative mb-3 h-64 w-full">
                        <Image
                          src="/assets/industry/zoom_industry.png"
                          className="rounded-lg grayscale"
                          fill={true}
                          alt={"Zoom Industry"}
                        />
                      </div>
                      <div className="my-3 rounded-lg bg-white p-8">
                        <h1 className="text-2xl font-bold text-gray-900">
                          <span className="text-primary-500">"</span>
                          <span>Visit our official </span>
                          <span className="text-primary-500">
                            Projects Notion Page
                          </span>
                          <span> to learn more about the individual </span>
                          projects and partner companies{" "}
                          <span>of industry phase 5.0</span>
                          <span className="text-primary-600">" 🤙🏼</span>
                        </h1>
                        <div className="text-white">
                          <button className="mx-4 mt-5 w-56 rounded-full bg-primary-800 px-8 py-2 font-bold text-white duration-500 hover:bg-primary-600">
                            view project page
                          </button>
                          <button className="mx-4 mt-5 w-44 rounded-full bg-primary-500 px-8 py-2 font-bold text-white duration-500 hover:bg-primary-400">
                            sign up now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="mx-16 my-14 px-5 py-6" id="partners_industry">
                <h1 className="mb-14 text-center text-4xl font-bold">
                  Our partners from&nbsp;
                  <span className="text-primary-500">Industry Phase 4.0</span>
                </h1>
                <div className="grid grid-cols-1 justify-center gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                  {partners.map((partner, index) => (
                    <div>
                      <Link href={partner.href} key={index}>
                        <div className="flex h-full items-center justify-center p-8 grayscale hover:grayscale-0">
                          <Image
                            src={partner.src}
                            alt={partner.alt}
                            height={50}
                            width={160}
                            objectFit="contain"
                            layout="intrinsic"
                          />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}
          {activeTab === "tab2" && <p>Content for tab 2.</p>}
          {activeTab === "tab3" && <p>Content for tab 3.</p>}
        </div>
      </div>
    </>
  );
}
