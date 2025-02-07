import Image from "next/image";
import { ubuntufont } from "../utils/fonts";
export default function HeroSection() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full h-svh flex flex-col lg:flex-row lg:items-center lg:justify-center py-40 lg:py-8 gap-10 px-8   ">
        <div className="flex flex-col gap-1">
          <div
            className={` text-wrap text-3xl lg:text-4xl flex flex-col lg:flex-row lg:gap-1 font-semibold ${ubuntufont.className}`}
          >
            Hello! <span>I&apos;m Amaan.</span>
          </div>
          <div className={`${ubuntufont.className}`}>
            A multidisciplinary developer with a passion for creating engaging,
            complicated, entertaining user experiences. ✨
          </div>
        </div>
        <div className="mx-auto">
          <Image
            src={"/bitmoji.png"}
            width={250}
            height={250}
            alt="Bitmoji of Amaan"
          />
        </div>
      </div>
    </div>
  );
}
