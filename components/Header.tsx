import { cx } from "class-variance-authority";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const NavToggle = () => {
  return (
    <button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="#ffffff"
        viewBox="0 0 448 512"
      >
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
      </svg>
    </button>
  );
};

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => setScrolled(latest > 0))

  return (
    <motion.header className={cx("duration-500 fixed z-10 w-full px-8 md:px-16", scrolled && 'backdrop-blur-lg bg-primary-950/80 py-8', !scrolled && "py-12")}>
      <div className="container relative mx-auto  flex flex-row justify-between">
        <Image
          src={"/assets/logo_new_white_standard.png"}
          alt="Logo"
          width="128"
          height="32"
        />

        <NavToggle />
      </div>
    </motion.header>
  );
};
