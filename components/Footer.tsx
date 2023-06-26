import {
  faInstagram,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-purple-950 text-white">
      <div className="container mx-auto grid gap-8 p-16 md:grid-cols-2">
        <div>
          <Image
            src={"/assets/logo_new_white_standard.png"}
            className="mb-8 flex text-2xl"
            alt="Logo"
            width="128"
            height="32"
          />

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
        </div>

        <div className="grid h-max sm:grid-cols-2 md:text-right">
          <Link
            className="py-2 underline duration-500 hover:text-purple-300"
            href=""
          >
            Contact
          </Link>
          <Link
            className="py-2 underline duration-500 hover:text-purple-300"
            href="inprint"
          >
            Inprint
          </Link>
          <Link
            className="py-2 underline duration-500 hover:text-purple-300"
            href=""
          >
            Terms &amp; Security
          </Link>
          <Link
            className="py-2 underline duration-500 hover:text-purple-300"
            href="https://github.com/tum-ai/website-nextjs/"
          >
            Request change
          </Link>
        </div>
      </div>
    </footer>
  );
}
