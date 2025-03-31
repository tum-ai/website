"use client";

import Button from "@components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

// Tech grid element with subtle particles
const TechGrid = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-20" suppressHydrationWarning>
      {/* Circuit-like tech grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Circuit nodes */}
      <div className="absolute inset-0">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[3px] w-[3px] rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            suppressHydrationWarning
          />
        ))}
      </div>

      {/* Horizontal lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`h-line-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"
          style={{
            top: `${15 + i * 20}%`,
            left: 0,
            right: 0,
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.2 }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 5,
          }}
        />
      ))}

      {/* Vertical lines */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`v-line-${i}`}
          className="absolute w-[1px] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent"
          style={{
            left: `${25 + i * 25}%`,
            top: 0,
            bottom: 0,
          }}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 0.2 }}
          transition={{
            duration: 2,
            delay: i * 0.7 + 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 4,
          }}
        />
      ))}
    </div>
  );
};

// Subtle floating background elements
const BackgroundCircle = ({
  size,
  initialPosition,
  duration,
  delay,
  opacity,
}: {
  size: number;
  initialPosition: { x: number; y: number };
  duration: number;
  delay: number;
  opacity: number;
}) => (
  <motion.div
    className="absolute rounded-full bg-white"
    style={{
      width: size,
      height: size,
      opacity: opacity,
      left: initialPosition.x + "%",
      top: initialPosition.y + "%",
      filter: "blur(40px)",
    }}
    initial={{ scale: 0.8 }}
    animate={{
      y: [0, -15, 0, 15, 0],
      scale: [0.8, 1, 0.9, 1, 0.8],
    }}
    transition={{
      repeat: Infinity,
      duration: duration,
      delay: delay,
      ease: "easeInOut",
    }}
    suppressHydrationWarning
  />
);

export const Hero = () => {
  const staggerDelay = 0.1;

  return (
    <section className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 to-purple-950 px-4 text-white">
      {/* Combined background elements */}
      <div className="absolute inset-0 opacity-30">
        <BackgroundCircle
          size={160}
          initialPosition={{ x: 10, y: 20 }}
          duration={8}
          delay={0}
          opacity={0.15}
        />
        <BackgroundCircle
          size={200}
          initialPosition={{ x: 75, y: 30 }}
          duration={12}
          delay={1}
          opacity={0.1}
        />
        <BackgroundCircle
          size={120}
          initialPosition={{ x: 60, y: 70 }}
          duration={10}
          delay={2}
          opacity={0.12}
        />
        <BackgroundCircle
          size={180}
          initialPosition={{ x: 25, y: 80 }}
          duration={9}
          delay={3}
          opacity={0.08}
        />
      </div>

      {/* Tech grid overlay */}
      <TechGrid />

      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[100px]" />
      <div className="absolute right-1/4 bottom-1/3 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[100px]" />

      <div className="relative z-10 max-w-4xl space-y-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto flex items-center justify-center"
        >
          <Image
            src="/assets/logo_new_white_standard.png"
            alt="TUM.ai Logo"
            width={300}
            height={66}
            priority
            className="mx-auto"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: staggerDelay, ease: "easeOut" }}
          className="text-xl font-light tracking-wide md:text-2xl"
        >
          Germany&apos;s leading student initiative focused on
          <span className="relative">
            <span className="relative z-10 ml-2 font-medium">
              Artificial Intelligence
            </span>
            <motion.span
              className="absolute bottom-0 left-0 z-0 h-[6px] w-full bg-purple-500/30"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 0.8,
                delay: staggerDelay + 0.5,
                ease: "easeOut",
              }}
            />
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: staggerDelay * 2,
            ease: "easeOut",
          }}
          className="flex flex-col items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4"
        >
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              intent="primary"
              className="w-full rounded-md px-6 py-3 sm:w-auto"
            >
              <Link href="mailto:partners@tum-ai.com">Become a Partner</Link>
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <Button
              asChild
              intent="glass"
              className="w-full rounded-md border border-white/20 px-6 py-3 shadow-sm backdrop-blur-sm hover:shadow-md sm:w-auto"
            >
              <Link href="https://join.tum-ai.com/">Become a Member</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute right-0 bottom-8 left-0 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: staggerDelay * 3, ease: "easeOut" }}
      >
        <motion.button
          onClick={() =>
            window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
          }
          title="Scroll down"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20"
          whileHover={{ y: 3 }}
          whileTap={{ scale: 0.9 }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
            },
          }}
        >
          <svg
            className="h-4 w-4 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.button>
      </motion.div>
    </section>
  );
};
