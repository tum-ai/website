"use client";

import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-xl"
          style={{
            animation: 'floatingPulse 25s ease-in-out infinite',
            animationDelay: '0s'
          }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-lg"
          style={{
            animation: 'floatingPulse 30s ease-in-out infinite',
            animationDelay: '8s'
          }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-purple-400 rounded-full blur-2xl"
          style={{
            animation: 'floatingPulse 35s ease-in-out infinite',
            animationDelay: '15s'
          }}
        ></div>

      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full w-full text-white">
        <div className="max-w-6xl mx-auto text-center p-8 flex flex-col justify-between h-full">

          {/* Main content area */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            {/* Sphere and Title */}
            <div className="flex flex-col items-center space-y-4 pt-8">
              {/* <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 p-1 shadow-2xl shadow-purple-500/30">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <video
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-24 h-24 object-contain"
                    >
                      <source src="/assets/e-lab/sphere-e-lab.mp4" />
                    </video>
                  </div>
                </div>
                {/* Pulsing ring
                <div className="absolute inset-0 rounded-full border-2 border-purple-400 animate-ping opacity-30"></div>
              </div> */}

              <div className="space-y-3">
                <div className="flex justify-center">
                  <div className="h-28 md:h-40 flex items-center">
                    <Image
                      src="/assets/e-lab/ai-e-lab-logo.png"
                      alt="AI E-LAB 4.0"
                      width={400}
                      height={160}
                      className="h-28 md:h-40 w-auto object-contain"
                      quality={100}
                      unoptimized={true}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <span className="text-lg text-gray-300">by</span>
                  <Image
                    src="/assets/logo_new_white_standard.png"
                    alt="TUM.ai Logo"
                    width={100}
                    height={35}
                    className="h-7 w-auto"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="max-w-2xl mx-auto space-y-2">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Build the next generation of <span className="text-purple-400 font-semibold">AI startups</span> in 14 weeks
              </p>
              <p className="text-base text-gray-400">
                Equity-free • Munich-based • Founder-focused
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-1">
              <a
                href="https://tally.so/r/3jVjWa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center px-7 py-2 text-base font-normal text-white transition-all duration-300 ease-out"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/25 transition-all duration-300 group-hover:shadow-purple-500/40 group-hover:scale-105"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <span className="relative flex items-center space-x-2">
                  <span>AI E-Lab 4.0 - Apply Now</span>
                  <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          {/* Sponsor section - positioned at bottom */}
          {/* <div className="mb-12 pt-5">
            <p className="text-sm text-gray-400 mb-4">Sponsored by</p>
            <div className="flex items-center justify-center space-x-6 opacity-70">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/e-lab/partners/picus_w.png"
                  alt="Picus"
                  width={60}
                  height={30}
                  className="h-5 w-auto object-contain"
                  quality={100}
                  unoptimized={true}
                />
              </div>
              <div className="flex items-center space-x-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/partners/uvc_w.svg"
                    alt="UVC Partners"
                    width={60}
                    height={30}
                    className="h-5 w-auto object-contain"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/partners/cherry_w.png"
                    alt="Cherry Ventures"
                    width={60}
                    height={30}
                    className="h-5 w-auto object-contain"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/20 transition-all duration-300">
                  <Image
                    src="/assets/e-lab/partners/hv_w.png"
                    alt="HV Capital"
                    width={60}
                    height={30}
                    className="h-5 w-auto object-contain"
                    quality={100}
                    unoptimized={true}
                  />
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/10 hover:bg-white/20 transition-all duration-300">
                <Image
                  src="/assets/e-lab/partners/lovable_w.png"
                  alt="Lovable"
                  width={60}
                  height={30}
                  className="h-5 w-auto object-contain"
                  quality={100}
                  unoptimized={true}
                />
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <button
          onClick={() => window.scrollBy({ top: 500, behavior: "smooth" })}
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white transition-colors duration-300 group"
          title="Scroll down"
        >

          <FontAwesomeIcon
            icon={faChevronDown}
            className="animate-bounce text-lg group-hover:text-purple-400 transition-colors"
          />
        </button>
      </div>
    </section>
  );
};
