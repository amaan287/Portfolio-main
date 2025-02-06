import { ubuntufont } from "../utils/fonts";
export default function HeroSection() {
  return (
    <div className="overflow-x-hidden">
      <div className="w-full h-svh flex flex-col  py-4 px-8 justify-center  ">
        <div
          className={`text-pretty text-2xl font-semibold ${ubuntufont.className}`}
        >
          Hello! I&apos;m Amaan.
        </div>
        <div>
          A multidisciplinary developer with a passion for creating engaging,
          complicated, entertaining user experiences. ✨
        </div>
      </div>
    </div>
  );
}
