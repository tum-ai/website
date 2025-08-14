"use client";

import Section from "@components/ui/Section";
import { Hero } from "./hero";
import { WhatToExpectRevamp } from "@components/WhatToExpectRevamp";
import { Organization, WithContext } from "schema-dts";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  archivoSemiBold,
  archivoBold,
  archivoSemiExpandedBold
} from "../../styles/fonts";
import { faq as additionalFaqs } from "../../data/e-lab";

export default function Page() {
  const jsonLd: WithContext<Organization> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Venture Department",
    alternateName: [
      "AI Entrepreneurship Lab",
      "AI E-Lab",
      "AI E-Lab by TUM.ai",
      "AI Entrepreneurship Lab by TUM.ai",
    ],
    description:
      "The Venture Department is the entrepreneurial arm of TUM.ai and organizes the AI Entrepreneurship Lab, a 14-week equity-free AI startup incubator.",
    url: "https://www.tum-ai.com/e-lab",
    email: "venture@tum-ai.com",
    sameAs: [
      "https://www.startbase.de/organization/ai-e-lab/",
      "https://www.startup-insider.com/investor/ai-e-lab-by-tum-ai",
      "https://www.munich-startup.de/startups/tum-ai-entrepreneurship-lab/",
    ],
    parentOrganization: {
      "@type": "Organization",
      name: "TUM.ai",
      legalName: "TUM.ai e.V.",
      alternateName: "TUM.ai Student Initiative",
      url: "https://www.tum-ai.com",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a2/TUM.ai_Logo_Blue_%26_Violet.svg",
      email: "contact@tum-ai.com",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "venture@tum-ai.com",
      contactType: "Venture Department",
    },
  };

  const hardcodedFaqItems = [
    {
      question: "Can I apply as a solo founder?",
      answer:
        "Yes, you can absolutely apply as a solo founder! We welcome individual applicants who are passionate about building AI startups. During the program, you'll have opportunities to find co-founders through our team-building activities and networking events.",
    },
    {
      question: "Do I need an idea to apply?",
      answer:
        "No, you don't need a fully formed idea to apply. The AI E-Lab is designed to help you develop and validate ideas during the program. We provide ideation workshops and guidance to help you discover the right opportunity to pursue.",
    },
    {
      question: "Does the AI E Lab require me to work from Munich?",
      answer:
        "Yes, the AI E-Lab is an in-person program based in Munich. You'll be working from our headquarters at TUM.ai, collaborating with other founders and having access to our physical workspace, mentors, and the local startup ecosystem.",
    },
    {
      question: "What is the time commitment for the program?",
      answer:
        "The AI E-Lab is a 12-week intensive program that requires significant time commitment. We expect participants to dedicate substantial time each week to building their startups, attending workshops, and participating in program activities.",
    },
    {
      question: "Do you take equity in my startup?",
      answer:
        "No, the AI E-Lab is completely equity-free! We don't take any equity stake in your venture. Our mission is to make AI entrepreneurship accessible to everyone, which is why we provide all support and resources without any financial investment or equity requirements.",
    },
  ];

  const allFaqItems = [...hardcodedFaqItems, ...additionalFaqs];

  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Removed legacy Notable Startups dataset and state; logos now link directly in the rotating strip

  // Interactive Timeline Component
  const InteractiveTimeline = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleScroll = () => {
        if (timelineRef.current) {
          const rect = timelineRef.current.getBoundingClientRect();
          const timelineTop = rect.top;
          const timelineHeight = rect.height;
          const windowHeight = window.innerHeight;

          // Calculate progress based on how much of the timeline is visible
          const visibleTop = Math.max(0, windowHeight - timelineTop);
          const visibleHeight = Math.min(visibleTop, timelineHeight);
          const progress = Math.min(1, Math.max(0, visibleHeight / timelineHeight));

          setScrollProgress(progress);
        }
      };

      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Initial calculation

      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const timelineItems = [
      { title: "Start", description: "October", side: "right" },
      { title: "Onboarding Weekend", description: "3 days intensive", side: "left" },
      { title: "Education Sessions", description: "Learning", side: "right" },
      { title: "Build & Iterate I", description: "4 weeks", side: "left" },
      { title: "Midterm-Pitch", description: "Initial Feedback", side: "right" },
      { title: "Build & Iterate II", description: "6 weeks", side: "left" },
      { title: "Pre-Demo Day Pitch", description: "The Final Test", side: "right" },
      { title: "Demo Day", description: "January", side: "left" }
    ];

    return (
      <Section className="flex flex-col items-center justify-center py-12 sm:py-12 lg:py-16 bg-white w-full">
        <h2 className={`text-3xl md:text-4xl tracking-tight font-normal mb-8 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Program</h2>
        <div ref={timelineRef} className="relative max-w-4xl mx-auto w-full">
          {/* Vertical line with gradient animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 rounded-full">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-purple-600 to-purple-400 rounded-full transition-all duration-300 ease-out"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: scrollProgress > 0 ? '0 0 20px rgba(168, 85, 247, 0.5)' : 'none'
              }}
            />
          </div>

          {/* Timeline items */}
          <div className="relative space-y-16">
            {timelineItems.map((item, index) => {
              const itemProgress = Math.max(0, Math.min(1, (scrollProgress * timelineItems.length) - index));
              const isActive = itemProgress > 0;

              return (
                <div key={index} className="flex items-center relative">
                  {item.side === "left" ? (
                    <>
                      <div className="w-1/2 pr-12 text-right">
                        <div className={`transition-all duration-500 ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-60'}`}>
                          <h3 className={`font-semibold text-xl mb-2 transition-colors duration-300 ${isActive ? 'text-purple-700' : 'text-gray-800'} ${archivoSemiBold.className}`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm transition-colors duration-300 ${isActive ? 'text-purple-600' : 'text-gray-600'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div
                          className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${isActive
                              ? 'bg-purple-600 border-purple-300 shadow-lg shadow-purple-300/50 scale-110'
                              : 'bg-white border-gray-400 scale-100'
                            }`}
                        >
                          {isActive && (
                            <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-30" />
                          )}
                        </div>
                      </div>
                      <div className="w-1/2"></div>
                    </>
                  ) : (
                    <>
                      <div className="w-1/2"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                        <div
                          className={`w-8 h-8 rounded-full border-4 transition-all duration-300 ${isActive
                              ? 'bg-purple-600 border-purple-300 shadow-lg shadow-purple-300/50 scale-110'
                              : 'bg-white border-gray-400 scale-100'
                            }`}
                        >
                          {isActive && (
                            <div className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-30" />
                          )}
                        </div>
                      </div>
                      <div className="w-1/2 pl-12">
                        <div className={`transition-all duration-500 ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-60'}`}>
                          <h3 className={`font-semibold text-xl mb-2 transition-colors duration-300 ${isActive ? 'text-purple-700' : 'text-gray-800'} ${archivoSemiBold.className}`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm transition-colors duration-300 ${isActive ? 'text-purple-600' : 'text-gray-600'}`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}

          </div>

        </div>
        {/* Subtitle */}
        <div className="text-center mt-12">
          <p className={`text-base text-gray-700 font-medium`}>Your journey continues...</p>
        </div>
      </Section>
    );
  };

  return (
    <>
      <section>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </section>
      <Hero />

      <WhatToExpectRevamp />

      {/* Alumni Testimonials Carousel */}
      <Section className="flex flex-col items-center justify-center py-12 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white w-full">
        <h2 className={`text-3xl md:text-4xl tracking-tight font-normal mb-4 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Our Community</h2>
        <p className={`text-base text-gray-600 mt-4 mb-10 text-center`}>Hear more from voices from our network</p>

        {/* Animated Cards Container */}
        <div className="relative w-full overflow-hidden py-4">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 bg-gradient-to-r from-gray-50 via-gray-50/70 to-transparent z-10 pointer-events-none"></div>
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 bg-gradient-to-l from-white via-gray-50/70 to-transparent z-10 pointer-events-none"></div>
          <div className="flex animate-scroll-left space-x-6 px-4">
            {/* Card 1 - Leon Hergert */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/leon_hergert.png"
                    alt="Leon Hergert"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Leon Hergert</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Co-Founder @ Spherecast</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 1.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"It was great to explore our startup idea next to our studies - it helped us meeting mentors which are on our side until this day."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/YC.png" alt="Y Combinator" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>Y Combinator S24</span>
              </div>
            </div>

            {/* Card 2 - Benedikt Wieser */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/benedikt_wieser.png"
                    alt="Benedikt Wieser"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Benedikt Wieser</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Winner AI E-Lab 2.0</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 2.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"I connected with people who understood the intensity of a startup journey and could challenge my assumptions."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/CDTM.png" alt="CDTM" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>CDTM Alumni</span>
              </div>
            </div>

            {/* Card 3 - Leonardo Benini */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/leonardo_benini.png"
                    alt="Leonardo Benini"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Leonardo Benini</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Founder @ Stealth Startup</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 3.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"The AI E-Lab is an amazing way to get immersed in Munich’s startup ecosystem - a truly effective starting point."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/ewor.png" alt="EWOR" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>EWOR Fellow</span>
              </div>
            </div>

            {/* Card 4 - Oliver Schoppe */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/oliver_schoppe.png"
                    alt="Oliver Schoppe"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Oliver Schoppe</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Principal @ UVC Partners</p>
                  <p className={`text-xs text-purple-600 font-medium`}>Mentor & Investor</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"The quality of founders coming out of AI E-Lab is exceptional. We’re proud to be part of this community."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/uvc_b.png" alt="UVC Partners" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>UVC Partners</span>
              </div>
            </div>

            {/* Card 5 - Viktor Shen */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/viktor_shen.jpeg"
                    alt="Viktor Shen"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Viktor Shen</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Founder of Tenmin</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 3.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"We went from zero to being a funded startup - the AI E-Lab accelerated our journey far beyond what we thought was possible.”</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/tenmin.svg" alt="Tenmin AI" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>Tenmin AI</span>
              </div>
            </div>

            {/* Duplicate cards for seamless loop */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/leon_hergert.png"
                    alt="Leon Hergert"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Leon Hergert</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Co-Founder @ Spherecast</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 1.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"It was great to explore our startup idea next to our studies - it helped us meeting mentors which are on our side until this day."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/YC.png" alt="Y Combinator" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>Y Combinator S24</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/benedikt_wieser.png"
                    alt="Benedikt Wieser"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Benedikt Wieser</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Winner AI E-Lab 2.0</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 2.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>“I connected with people who understood the intensity of a startup journey and could challenge my assumptions.”</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/CDTM.png" alt="CDTM" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>CDTM Alumni</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/leonardo_benini.png"
                    alt="Leonardo Benini"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Leonardo Benini</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Founder @ Stealth Startup</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 3.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"The AI E-Lab is an amazing way to get immersed in Munich’s startup ecosystem - a truly effective starting point."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/ewor.png" alt="EWOR" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>EWOR Fellow</span>
              </div>
            </div>

            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/oliver_schoppe.png"
                    alt="Oliver Schoppe"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Oliver Schoppe</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Principal @ UVC Partners</p>
                  <p className={`text-xs text-purple-600 font-medium`}>Mentor & Investor</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"The quality of founders coming out of AI E-Lab is exceptional. We’re proud to be part of this community."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/uvc_b.png" alt="UVC Partners" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>UVC Partners</span>
              </div>
            </div>

            {/* Card 5 - Viktor Shen */}
            <div className="flex-shrink-0 w-80 bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300 flex flex-col h-72">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src="/assets/e-lab/testimonials/viktor_shen.jpeg"
                    alt="Viktor Shen"
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-lg text-gray-900 truncate`}>Viktor Shen</h3>
                  <p className={`text-sm text-gray-600 truncate`}>Founder of Tenmin</p>
                  <p className={`text-xs text-purple-600 font-medium`}>AI E-Lab 3.0</p>
                </div>
              </div>
              <p className={`text-gray-700 text-sm leading-relaxed flex-1 overflow-hidden`}>"We went from zero to being a funded startup - the AI E-Lab accelerated our journey far beyond what we thought was possible."</p>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                <div className="w-8 h-8 flex items-center justify-center">
                  <Image src="/assets/e-lab/partners/tenmin.svg" alt="Tenmin AI" width={32} height={24} className="object-contain" />
                </div>
                <span className={`text-xs text-gray-500`}>Tenmin AI</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <InteractiveTimeline />

      {/* Removed Notable Startups interactive panel */}

      {/* Removed: Community is created by working together section */}

      <Section className="relative overflow-hidden py-12 sm:py-12 lg:py-16 w-full bg-gradient-to-br from-purple-50 via-white to-blue-50">

        {/* Decorative gradient blobs for depth */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-purple-400/40 to-fuchsia-400/30 blur-3xl"></div>
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-gradient-to-br from-indigo-400/30 to-sky-400/30 blur-3xl"></div>
        <div className="pointer-events-none absolute top-1/3 -right-24 h-64 w-64 rounded-full bg-gradient-to-br from-pink-400/20 to-purple-400/20 blur-3xl"></div>

        <div className="container mx-auto">
          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center">
              {/* Main card */}
              <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[28px] border-2 border-white/40 bg-white/10 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 transition-transform duration-300 ease-out hover:scale-[1.01] md:hover:scale-[1.02]">
                {/* Liquid glass tint and inner gradient */}
                <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-purple-200/25 via-white/10 to-indigo-200/15"></div>
                {/* Inner subtle bevel */}
                <div className="pointer-events-none absolute inset-0 rounded-[28px] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-1px_0_rgba(255,255,255,0.12)]"></div>

                {/* Top highlight */}
                <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/70 to-transparent"></div>

                {/* Left highlight */}
                <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-transparent via-white/60 to-transparent"></div>

                {/* Specular reflections */}
                <div className="pointer-events-none absolute -top-20 left-1/4 h-40 w-1/2 rotate-6 rounded-full bg-gradient-to-r from-white/60 to-transparent blur-2xl"></div>
                <div className="pointer-events-none absolute top-1/3 -right-10 h-24 w-72 -rotate-12 rounded-full bg-gradient-to-r from-white/25 to-transparent blur-xl"></div>
                {/* Top-left highlight bubble */}
                <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-32 rounded-full bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.9),_rgba(255,255,255,0.35)_60%,_transparent_70%)] blur-md"></div>
                <div className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-900/5 to-transparent"></div>

                <div className="relative px-12 py-18 md:px-18 md:py-20">
                  <div className="text-center">
                    <h2 className={`mb-5 text-3xl md:text-4xl font-bold text-black ${archivoBold.className}`}>
                      Applications for AI E-Lab 4.0 are open!
                    </h2>

                    <p className={`mx-auto mb-10 max-w-2xl text-base leading-relaxed text-slate-700`}>
                      Secure your spot in one of Europe’s leading AI incubators and join a network of top founders, mentors, and investors.
                    </p>

                    <div className="flex justify-center">
                      <div className="relative">
                        {/* Radiating glow effect - always visible */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg opacity-50 blur-xl"></div>

                        {/* Sparkling effects - always visible */}


                        <a
                          href="https://forms.tum-ai.com/ai-e-lab-3.0-application"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-6 py-3 text-base font-semibold text-white shadow-xl transition-[background-position,transform] duration-500 ease-out hover:scale-[1.02]
                          bg-[linear-gradient(135deg,#7C3AED_0%,#A855F7_33%,#EC4899_66%,#6366F1_100%)] bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%]`}
                        >
                          {/* Soft glow behind button */}
                          <div className="pointer-events-none absolute -inset-x-8 -bottom-6 h-16 rounded-full bg-gradient-to-r from-purple-500/40 via-fuchsia-500/40 to-indigo-500/40 blur-2xl"></div>
                          {/* Border and shine */}
                          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/30"></div>
                          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.35),_transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                          <span className="relative z-10 flex items-center gap-2">
                            <span>Apply until 01.09.2025</span>
                            <svg
                              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Notable Startups Section */}
      <Section className="py-12 sm:py-12 lg:py-16 bg-gray-50 w-full overflow-hidden">
        <div className="max-w-6xl mx-auto text-center px-4">
          <p className={`text-sm text-gray-500 mb-8 uppercase tracking-wider`}>
            Notable AI E-Lab Startups from previous iterations
          </p>

          {/* Rotating startup logos */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-scroll-left space-x-8 md:space-x-12 items-center whitespace-nowrap">
              {/* First set of logos */}
              <div className="flex space-x-8 md:space-x-12 items-center shrink-0">
                <a href="https://tenmin.ai/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-20 md:w-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/Tenmin.svg" alt="Tenmin" width={120} height={48} className="h-8 md:h-10 w-auto object-contain" />
                </a>
                <a href="https://explaino.ai/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/LogoExplaino.svg" alt="Explaino" width={160} height={48} className="h-6 md:h-8 w-auto object-contain" />
                </a>
                <a href="https://www.spherecast.ai/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-22 md:w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/Spherecast.webp" alt="Spherecast" width={140} height={48} className="h-8 md:h-10 w-auto object-contain" />
                </a>
                <a href="https://www.get-ikigai.com/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/get-ilkigai.svg" alt="Get Ikigai" width={135} height={25} className="h-6 md:h-8 w-auto object-contain" />
                </a>
                <a href="https://www.tau-robotics.com/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="flex items-center">
                    <Image src="/assets/e-lab/startups/TauRobotics.svg" alt="Tau Robotics" width={40} height={40} className="h-8 md:h-10 w-auto object-contain mr-2 sm:mr-4" />
                    <span className={`text-sm md:text-base font-bold text-black ${archivoSemiExpandedBold.className}`}>Tau Robotics</span>
                  </div>
                </a>
                <a href="https://www.helmit.org/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-22 md:w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/helmit.svg" alt="Helmit" width={40} height={40} className="h-8 md:h-10 w-auto object-contain" />
                </a>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex space-x-8 md:space-x-12 items-center shrink-0">
                <a href="https://tenmin.ai/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-20 md:w-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/Tenmin.svg" alt="Tenmin" width={120} height={48} className="h-8 md:h-10 w-auto object-contain" />
                </a>
                <a href="https://explaino.ai/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/LogoExplaino.svg" alt="Explaino" width={160} height={48} className="h-6 md:h-8 w-auto object-contain" />
                </a>
                <a href="https://www.spherecast.ai/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-22 md:w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/Spherecast.webp" alt="Spherecast" width={140} height={48} className="h-8 md:h-10 w-auto object-contain" />
                </a>
                <a href="https://www.get-ikigai.com/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-24 md:w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/get-ilkigai.svg" alt="Get Ikigai" width={135} height={25} className="h-6 md:h-8 w-auto object-contain" />
                </a>
                <a href="https://www.tau-robotics.com/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-auto flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <div className="flex items-center">
                    <Image src="/assets/e-lab/startups/TauRobotics.svg" alt="Tau Robotics" width={40} height={40} className="h-8 md:h-10 w-auto object-contain mr-2 sm:mr-4" />
                    <span className={`text-sm md:text-base font-bold text-black ${archivoSemiExpandedBold.className}`}>Tau Robotics</span>
                  </div>
                </a>
                <a href="https://www.helmit.org/" target="_blank" rel="noopener noreferrer" className="h-10 md:h-12 w-22 md:w-28 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                  <Image src="/assets/e-lab/startups/helmit.svg" alt="Helmit" width={40} height={40} className="h-8 md:h-10 w-auto object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="flex flex-col items-center justify-center py-12 sm:py-12 lg:py-16 bg-white w-full">
        <h2 className={`text-3xl md:text-4xl tracking-tight font-normal mb-8 text-black text-center uppercase ${archivoSemiExpandedBold.className}`}>Frequently Asked Questions</h2>
        <div className="w-full max-w-4xl mx-auto space-y-4">
          {allFaqItems.map((item, index) => (
            <div key={`${item.question}-${index}`} className="border-b border-gray-200 pb-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className={`text-base font-normal text-gray-800`}>{item.question}</h3>
                <span className={`text-2xl text-gray-400 transition-transform ${openFAQ === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </div>
              {openFAQ === index && (
                <div className={`mt-4 text-gray-600 text-base animate-in slide-in-from-top-2 duration-200`}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
