import {
  faInstagram,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Dialog from "@radix-ui/react-dialog";
import Button from "@ui/Button";
import { cx } from "class-variance-authority";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navigation = ({ open, setOpen }) => {
  const links = [
    { href: "https://education.tum-ai.com/", text: "AI Academy" },
    { href: "https://summit.tum-ai.com", text: "AI Summit" },
    { href: "/e-lab", text: "AI E-Lab" },
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
              className="fixed inset-0 flex items-center bg-purple-950/80 backdrop-blur-lg"
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

              <hr className="my-8 border-b-2" />

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
        "fixed z-50 w-full px-8 duration-500 md:px-16",
        scrolled && !navOpen && "top-0 bg-purple-950/90 py-8 backdrop-blur-lg",
        (!scrolled || navOpen) && "py-12",
        navOpen && "top-0"
      )}
    >
      <div className="container relative mx-auto flex flex-row justify-between">
        <Link href={"/"}>
          <svg
            className="h-8 fill-white"
            viewBox="0 0 951 228"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4218 197.181L87.9235 14.9033C91.4067 6.49417 99.6125 1.01123 108.715 1.01123C108.9 1.01123 109.084 1.0134 109.268 1.01772C109.451 1.0134 109.636 1.01123 109.821 1.01123C118.923 1.01123 127.079 8.33295 130.562 16.7421L206.114 197.181C212.101 211.636 201.477 227.536 185.831 227.536C177.003 227.536 169.034 222.249 165.603 214.115L125.035 117.94C119.151 103.992 99.3844 103.992 93.5005 117.94L52.932 214.115C49.5011 222.249 41.532 227.536 32.7043 227.536C17.0584 227.536 6.43436 211.636 12.4218 197.181Z"
              />
              <path
                d="M88.0771 14.9034L12.5753 197.181C6.58791 211.636 17.2119 227.536 32.8579 227.536C41.6856 227.536 49.6546 222.249 53.0856 214.115L118.63 58.7301L129.656 32.1335C135.8 17.3153 124.909 1.01123 108.868 1.01123C99.766 1.01123 91.5603 6.49417 88.0771 14.9034Z"
                fill="white"
                stroke="white"
                strokeWidth="0.629236"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path d="M199.509 14.9034L275.011 197.181C280.998 211.636 270.374 227.536 254.728 227.536C245.9 227.536 237.931 222.249 234.5 214.115L168.956 58.7301L157.93 32.1335C151.786 17.3153 162.677 1.01123 178.718 1.01123C187.82 1.01123 196.026 6.49417 199.509 14.9034Z" />
            </g>

            <g
              className={cx(
                "duration-500",
                scrolled && !navOpen && "opacity-0"
              )}
            >
              <path d="M427.875 86.7339V179.486H402.834V86.7339H371.697V64.4933H459.012V86.7339H427.875Z" />
              <path d="M508.104 64.4933V135.004C508.104 143.132 509.696 149.227 512.881 153.291C516.067 157.245 521.393 159.222 528.862 159.222C536.33 159.222 541.657 157.245 544.842 153.291C548.027 149.227 549.62 143.132 549.62 135.004V64.4933H574.002V132.368C574.002 140.825 573.178 148.184 571.531 154.444C569.993 160.595 567.412 165.702 563.788 169.766C560.163 173.719 555.496 176.685 549.784 178.662C544.073 180.529 537.099 181.462 528.862 181.462C520.624 181.462 513.65 180.529 507.939 178.662C502.228 176.685 497.56 173.719 493.936 169.766C490.311 165.702 487.675 160.595 486.028 154.444C484.49 148.184 483.722 140.825 483.722 132.368V64.4933H508.104Z" />
              <path d="M693.003 104.032H692.509L684.107 120.836L661.702 161.528L639.791 121.001L631.059 102.879H630.565V179.486H607.006V64.4933H633.53L661.702 118.365H662.031L689.873 64.4933H716.562V179.486H693.003V104.032Z" />
              <path d="M763.076 181.298C758.133 181.298 754.454 180.09 752.038 177.673C749.731 175.147 748.578 171.962 748.578 168.118V164.823C748.578 160.979 749.731 157.849 752.038 155.433C754.454 152.907 758.133 151.644 763.076 151.644C768.018 151.644 771.642 152.907 773.949 155.433C776.365 157.849 777.573 160.979 777.573 164.823V168.118C777.573 171.962 776.365 175.147 773.949 177.673C771.642 180.09 768.018 181.298 763.076 181.298Z" />
              <path d="M872.871 179.486C868.477 179.486 864.798 178.113 861.833 175.367C858.977 172.621 857.165 168.942 856.396 164.329H855.408C854.09 169.93 851.179 174.214 846.676 177.179C842.173 180.035 836.627 181.462 830.037 181.462C821.36 181.462 814.715 179.156 810.103 174.543C805.49 169.93 803.183 163.835 803.183 156.256C803.183 147.141 806.478 140.386 813.068 135.993C819.768 131.49 828.829 129.238 840.251 129.238H853.925V123.802C853.925 119.628 852.827 116.333 850.63 113.917C848.433 111.391 844.754 110.128 839.592 110.128C834.759 110.128 830.915 111.171 828.06 113.258C825.204 115.345 822.843 117.706 820.976 120.342L806.478 107.492C809.993 102.33 814.386 98.321 819.658 95.4654C825.039 92.5 832.288 91.0173 841.404 91.0173C853.705 91.0173 862.931 93.7082 869.081 99.0898C875.232 104.472 878.307 112.324 878.307 122.648V160.54H886.38V179.486H872.871ZM839.098 164.494C843.161 164.494 846.621 163.615 849.477 161.858C852.442 160.101 853.925 157.245 853.925 153.291V143.077H842.063C832.508 143.077 827.73 146.317 827.73 152.797V155.268C827.73 158.453 828.719 160.814 830.696 162.352C832.673 163.78 835.473 164.494 839.098 164.494Z" />
              <path d="M923.173 83.7685C918.231 83.7685 914.606 82.6702 912.3 80.4736C910.103 78.1672 909.005 75.2567 909.005 71.7421V68.1177C909.005 64.6031 910.103 61.7476 912.3 59.551C914.606 57.2445 918.231 56.0913 923.173 56.0913C928.116 56.0913 931.685 57.2445 933.882 59.551C936.188 61.7476 937.341 64.6031 937.341 68.1177V71.7421C937.341 75.2567 936.188 78.1672 933.882 80.4736C931.685 82.6702 928.116 83.7685 923.173 83.7685ZM910.982 92.9943H935.364V179.486H910.982V92.9943Z" />
            </g>
          </svg>
        </Link>

        <Navigation open={navOpen} setOpen={setNavOpen} />
      </div>
    </motion.header>
  );
};
