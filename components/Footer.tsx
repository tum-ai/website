import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container mx-auto py-16 grid grid-cols-2">
        <div>
          <Image
            src={"/assets/logo_new_white_standard.png"}
            alt="Logo"
            width="128"
            height="32"
          />
          <h3>TUM.ai &copy; 2022</h3>
          <div>
            <FontAw
          </div>
        </div>
        <div className="grid grid-cols-2">
          <Link href="">Contact</Link>
          <Link href="">Inprint</Link>
          <Link href="">Terms &amp; Security</Link>
          <Link href="">Request change</Link>
        </div>
      </div>
    </footer>
  );
}
