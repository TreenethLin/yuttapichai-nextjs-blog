import * as React from "react"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PaulCVOne from "../assets/paul-cv-1.jpg";
import PaulCVTwo from "../assets/paul-cv-2.jpg";
import { ShortProfile } from "./ShortProfile";

export function ResumeViewer() {
  return (
    <React.Fragment>
    <ShortProfile />
    <div className="w-full lg:w-[750px] md:w-[700px] mx-auto flex flex-col justify-center items-center">
      <Button asChild className="text-md font-bold my-6 dark:text-white w-full md:w-48">
        <Link href="https://drive.google.com/file/d/18xx0MDvpNQi2VNEjsQ9tNDQAl0pwTvwZ/view?usp=sharing" target="_blank">
          Download CV
        </Link>
      </Button>
      <div className="w-full">
          <Image src={PaulCVOne} alt="image" className="object-cover"/>
          <Image src={PaulCVTwo} alt="image" className="object-cover -mt-10" />
      </div>
    </div>
    </React.Fragment>
  );
}
