import Image from "next/image";

const Testimonials = ({ imgSrc, name, text, logoSrc }) => {
  return (
    <div className="max-w-s w-full rounded-lg border border-gray-700 bg-gray-800 text-white shadow sm:max-w-lg">
      <div className="flex flex-col items-center pb-10">
        <h5 className="mb-1 pt-4 text-xl font-medium text-white">{name}</h5>
        <Image
          className="mb-3 h-24 w-24 rounded-full shadow-lg"
          src={imgSrc}
          alt="Bonnie image"
          width={96}
          height={96}
        />
        <blockquote className="sm:text-md p-4 text-center font-semibold leading-8 text-white">
          <p> "{text}”</p>
        </blockquote>
        {/* <div style={{ maxHeight: "100px", maxWidth: "100%" }}>
            <Image
              src={logoSrc}
              alt={""}
              layout="fill"
              objectFit="contain"
              className="object-contain"
            />
          </div> */}
        <div style={{}}>
          <Image
            src={logoSrc}
            alt=""
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "80px" }} // optional
          />
        </div>
        {/* <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
      </div>
    </div>
  );
};

export default Testimonials;
