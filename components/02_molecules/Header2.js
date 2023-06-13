import Image from "next/image";


export default function Header2({ imageSrc, title, subtitle }) {
  return (
    <div className="relative w-4/5 m-auto">
      <div className="flex flex-col justify-center items-center h-[350px]">
        <div className="max-w-2xl w-full h-full relative">
          <Image 
            className="object-contain w-full h-full flex justify-center items-center relative"
            src={imageSrc} 
            alt="icon" 
            fill={true}
          />
        <div className=" absolute bottom-8">
        {(title != undefined) &&
          <div className="p-2 font-bold bg-white w-fit">{title}</div>
        }
        {(subtitle != undefined) && 
          <div className="p-2 bg-white w-fit">{subtitle}</div>
        }
        </div>
      </div>
    </div>
  </div>
  );
}
