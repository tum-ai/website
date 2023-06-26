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
import {
  faLinkedin,
  faInstagram,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@ui/Button";

const Navigation = ({ open, setOpen }) => {
  const links = [
    { href: "https://aielab.tum-ai.com/", text: "AI E-Lab" },
    { href: "https://makeathon.tum-ai.com/", text: "Makeathon" },
    { href: "/industry", text: "Industry Projects" },
    { href: "/partners", text: "Partners" },
    { href: "/members", text: "Members" },
  ];
  return (
    <Dialog.Root open={open} onOpenChange={(open) => setOpen(open)}>
      <AnimatePresence>
        <Dialog.Portal>
          <Dialog.Overlay asChild>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center bg-blue-800/80 backdrop-blur-lg"
            />
          </Dialog.Overlay>

          <Dialog.Content className="container fixed left-[50%] top-[50%]  mx-auto max-w-lg translate-x-[-50%] translate-y-[-50%] text-white">
            <nav className="p-4">
              <ul className="flex flex-col space-y-2">
                {links.map(({ href, text }) => (
                  <Link
                    key={text}
                    className="w-full rounded-2xl p-4 text-2xl duration-500 hover:bg-purple-500/80"
                    href={href}
                    onClick={() => setOpen(false)}
                  >
                    {text}
                  </Link>
                ))}
              </ul>

              <hr className="border-b-2 my-8" />

              <div className="flex justify-between p-4">
                <div className="space-x-4">
                  <Link href="https://www.instagram.com/tum.ai_official/">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="2xl"
                      className="mb-4 text-white duration-500 hover:text-purple-300"
                    />
                  </Link>
                  <Link href="https://de.linkedin.com/company/tum-ai">
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="2xl"
                      className="mb-4 text-white duration-500 hover:text-purple-300"
                    />
                  </Link>
                  <Link href="https://join.slack.com/t/tumaipublic/shared_invite/zt-10kg0t1f9-JLRXDxY_d_vprKWgab0cVw">
                    <FontAwesomeIcon
                      icon={faSlack}
                      size="2xl"
                      className="mb-4 text-white duration-500 hover:text-purple-300"
                    />
                  </Link>
                </div>

                <Link href="https://join-us.tum-ai.com/">
                  <Button>Join us</Button>
                </Link>
              </div>
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </AnimatePresence>

      {!open && (
        <Dialog.Trigger asChild>
          <button className="absolute right-0">
            <FontAwesomeIcon icon={faBars} color="white" size="xl" />
          </button>
        </Dialog.Trigger>
      )}
      {!!open && (
        <Dialog.Close asChild>
          <button className="absolute right-0">
            <FontAwesomeIcon icon={faXmark} color="white" size="xl" />
          </button>
        </Dialog.Close>
      )}
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
        scrolled && !navOpen && "bg-blue-800/80 py-8 backdrop-blur-lg",
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
