import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <div>
        <Link href={"https://reviewsphere-production.up.railway.app"}>
          <Image
            width={1000}
            height={700}
            src={"/review-sphere.png"}
            className="bg-black"
            alt="Review sphere"
          />
        </Link>
        <Link
          href={"https://ai-calculator-production.up.railway.app/"}
          target="_blank"
        >
          <div className="flex flex-row md:flex-col">
            <Image
              width={1000}
              height={700}
              src={"/ai-calc-question.png"}
              className="bg-black"
              alt="AI-Powered Calculator"
            />
            <Image
              width={1000}
              height={700}
              src={"/ai-calc-result.png"}
              className="bg-black"
              alt="AI-Powered Calculator"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
