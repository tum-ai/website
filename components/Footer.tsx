import Link from "next/link";
import Image from "next/image";
import Section from "./ui/Section";
import {
  faLinkedin,
  faInstagram,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-purple-950 to-purple-900">
      <div className="bg-grid-white/[0.02] absolute inset-0 [mask-image:radial-gradient(white,transparent_85%)]" />

      <Section className="relative">
        <div className="container py-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0">
              <Image
                src={"/assets/logo_new_white_standard.png"}
                className="mb-6 flex text-2xl transition-all duration-300 hover:opacity-90"
                alt="Logo"
                width="128"
                height="32"
              />

              <p className="mb-6 max-w-md text-sm text-white/60">
                Building the next generation of AI leaders and innovators
                through community, education, and real-world projects.
              </p>

              <div className="flex space-x-5">
                <Link
                  href="https://www.instagram.com/tum.ai_official/"
                  target="_blank"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="text-white transition-all duration-300 group-hover:scale-110"
                  />
                </Link>
                <Link
                  href="https://de.linkedin.com/company/tum-ai"
                  target="_blank"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-white transition-all duration-300 group-hover:scale-110"
                  />
                </Link>
                <Link
                  href="https://join.slack.com/t/tumaipublic/shared_invite/zt-10kg0t1f9-JLRXDxY_d_vprKWgab0cVw"
                  target="_blank"
                  className="group relative flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                  aria-label="Slack"
                >
                  <FontAwesomeIcon
                    icon={faSlack}
                    className="text-white transition-all duration-300 group-hover:scale-110"
                  />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-2 sm:grid-cols-4 sm:gap-x-16 md:gap-x-8">
              <div className="col-span-1">
                <p className="mb-3 text-xs font-medium tracking-wider text-white/50 uppercase">
                  Connect
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-sm text-white/80 transition-colors duration-300 hover:text-purple-300"
                      href="mailto:contact@tum-ai.com"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <p className="mb-3 text-xs font-medium tracking-wider text-white/50 uppercase">
                  Legal
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-sm text-white/80 transition-colors duration-300 hover:text-purple-300"
                      href="/imprint"
                    >
                      Imprint
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-sm text-white/80 transition-colors duration-300 hover:text-purple-300"
                      href="/data-privacy"
                    >
                      Data Privacy
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-1">
                <p className="mb-3 text-xs font-medium tracking-wider text-white/50 uppercase">
                  Contribute
                </p>
                <ul className="space-y-2">
                  <li>
                    <Link
                      className="text-sm text-white/80 transition-colors duration-300 hover:text-purple-300"
                      href="https://github.com/tum-ai/website-nextjs/"
                      target="_blank"
                    >
                      GitHub
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between border-t border-white/10 pt-8 sm:flex-row">
            <p className="text-sm text-white/40">
              TUM.ai - Student Initiative at Technical University of Munich
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
}
