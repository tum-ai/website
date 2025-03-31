import Image from "next/image";
import Link from "next/link";

interface TestimonialsProps {
  imgSrc: string;
  name: string;
  text: string;
  logoSrc: string;
  logoAlt: string;
  link: string;
  company: string;
}

const Testimonials = ({
  imgSrc,
  name,
  text,
  logoSrc,
  logoAlt,
  link,
  company,
}: TestimonialsProps) => {
  return (
    <div className="max-w-s 10 w-full rounded-lg p-4 text-white sm:max-w-lg sm:p-10">
      <div className="just flex h-full flex-col items-center">
        <Link href={link} passHref target="_blank">
          <Image
            className="mb-3 w-36 rounded-full shadow-lg"
            src={imgSrc}
            alt={name + " profile picture"}
            width={96}
            height={96}
          />
          <h3 className="my-8 text-center text-xl font-bold text-white">
            {name}
          </h3>
        </Link>

        <p className="sm:text-md text-center leading-8 text-white sm:p-4">
          &quot;{text}&quot;
        </p>
        <div className="mt-auto h-32">
          <div className="flex h-full min-w-160 items-center justify-center p-8">
            {logoSrc && (
              <Link href={company} passHref target="_blank">
                <Image
                  src={logoSrc}
                  alt={logoAlt}
                  width={96}
                  height={80}
                  style={{
                    width: "100%",
                    height: "80px",
                    objectFit: "contain",
                  }}
                />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
