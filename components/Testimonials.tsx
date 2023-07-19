import Image from "next/image";

const Testimonials = ({ imgSrc, name, text, logoSrc, logoAlt }) => {
  return (
    <div className="max-w-s 10 w-full rounded-lg p-4 text-white sm:max-w-lg sm:p-10">
      <div className="just flex h-full flex-col items-center">
        <Image
          className="h-100 mb-3 w-36 rounded-full shadow-lg"
          src={imgSrc}
          alt={name}
          width={96}
          height={96}
        />
        <h5 className="my-8 text-xl font-bold text-white">{name}</h5>

        <p className="sm:text-md text-center leading-8 text-white sm:p-4">
          &quot;{text}&quot;
        </p>
        <div className="mt-auto h-32">
          <div className="min-w-160 flex h-full items-center justify-center p-8">
            <img
              src={logoSrc}
              alt={logoAlt}
              style={{ width: "100%", height: "80px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
