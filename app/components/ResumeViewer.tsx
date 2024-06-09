import * as React from "react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShortProfile } from "./ShortProfile";

export function ResumeViewer() {
  return (
    <React.Fragment>
    <ShortProfile />
    <div className="w-full lg:w-[750px] md:w-[700px] mx-auto flex flex-col justify-center items-center">
      <Button asChild className="text-md font-bold my-6 dark:text-white w-full md:w-48">
        <Link href="https://drive.google.com/file/d/1HO-1gR5fvKyHDo3M9iVuSX48NbY1Nmrb/view" target="_blank">
          Download CV
        </Link>
      </Button>
    </div>
    </React.Fragment>
  );
}
