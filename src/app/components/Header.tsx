import Link from "next/link";
import { poppinsfont } from "../utils/fonts";
export default function Header() {
  return (
    <div
      className={`w-screen h-full border-b border-black  flex justify-between items-center px-6 py-2 ${poppinsfont.className}`}
    >
      <h1 className={`text-2xl font-semibold`}>Amaan mirza</h1>
      <div className="flex gap-10 font-medium ">
        <Link href={"#"}>Projects</Link>
        <Link href={"#"}>About</Link>
        <Link href={"#"}>Skills</Link>
      </div>
    </div>
  );
}
