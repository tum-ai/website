import { cx } from "class-variance-authority";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import Link from "next/link";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navigation = ({ open, setOpen }) => {
  const links = [
    { href: "https://aielab.tum-ai.com/", text: "AI E-Lab" },
    { href: "https://makeathon.tum-ai.com/", text: "Makeathon" },
    { href: "/industry", text: "Industry Projects" },
    { href: "/partners", text: "Partners" },
    { href: "/members", text: "Members" },
    { href: "https://join-us.tum-ai.com/", text: "Join us" },
    { href: "/workshops", text: "Workshops" },
    { href: "/blog", text: "TUM.ai Blog" },
  ];
  return (
    <Dialog.Root open={open} onOpenChange={(open) => setOpen(open)}>
      {!open && (
        <Dialog.Trigger asChild>
          <button>
            <FontAwesomeIcon icon={faBars} color="white" size="xl" />
          </button>
        </Dialog.Trigger>
      )}

      <AnimatePresence>
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center bg-primary-950/80 backdrop-blur-lg"
            />
          </Dialog.Overlay>

          <Dialog.Content className="mt-30 fixed inset-0 flex items-center">
            <div className="bg-green absolute top-0 w-full">
              <div className="container mx-auto flex flex-row-reverse py-12">
                <Dialog.Close
                  asChild
                  className="w-10 rounded-2xl p-2 text-center duration-500 hover:bg-primary-500/80"
                >
                  <button>
                    <FontAwesomeIcon icon={faXmark} color="white" size="xl" />
                  </button>
                </Dialog.Close>
              </div>
            </div>

            <nav className="container mx-auto flex flex-col space-y-2 text-white">
              {links.map(({ href, text }) => (
                <Link
                  key={text}
                  className="w-full rounded-2xl p-4 text-2xl duration-500 hover:bg-primary-500/80"
                  href={href}
                  onClick={() => setOpen(false)}
                >
                  {text}
                </Link>
              ))}
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </AnimatePresence>
    </Dialog.Root>
  );
};

export const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) =>
    setScrolled(latest > 0)
  );

  return (
    <motion.header
      className={cx(
        "fixed z-10 w-full px-8 duration-500 md:px-16",
        scrolled && !navOpen && "bg-primary-950/80 py-8 backdrop-blur-lg",
        (!scrolled || navOpen) && "py-12"
      )}
    >
      <div className="container relative mx-auto flex flex-row justify-between">
        <Image
          src={"/assets/logo_new_white_standard.png"}
          alt="Logo"
          width="128"
          height="32"
        />

        <Navigation open={navOpen} setOpen={setNavOpen} />
      </div>
    </motion.header>
  );
};
