import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex bg-primary px-8 py-20">
        <div className="m-auto inline-block space-y-8">
          <Image
            src={"/assets/logo_new_white_standard.png"}
            alt="Logo"
            width={450}
            height={100}
          />
          <div className="flex w-full justify-center space-x-4">
            <button className="rounded-full bg-primary-500 px-4 py-1 text-white">
              Become a Partner
            </button>
            <button className="rounded-full bg-primary-500 px-4 py-1 text-white">
              Become a Member
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
