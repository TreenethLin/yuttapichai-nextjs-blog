import Link from "next/link";
import Image from "next/image";
import LogoImage from "../assets/yuttapichai.png"
import { ModeToggle } from "./ModeToggle";
import { Separator } from "@/components/ui/separator"


export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between max-w-3xl mx-auto px-4 py-5">
            <div className="w-full flex justify-start items-center">
            <Link href="/" className="font-bold text-3xl">
                <div className="flex justify-center items-center">
                <Image 
                    src={LogoImage} 
                    alt="image" 
                    width={100} 
                    height={100}
                    className="rounded-full mr-2"
                />
                </div>
            </Link>
            <div>
            <Link href="/">
            <div className="space-y-1">
                <h1 className="font-semibold text-4xl leading-none">อาจาน<span className="text-primary">พอล</span></h1>
            </div>
            </Link>
            <Separator className="my-2" />
            <div className="flex h-5 items-center space-x-4 text-md">
                <Link href="/">
                <div className="hover:underline">Home</div>
                </Link>
                <Separator orientation="vertical" />
                <Link href="/#blog">
                <div className="hover:underline">Blog</div>
                </Link>
                <Separator orientation="vertical" />
                <Link href="/cv">
                <div className="hover:underline">CV</div>
                </Link>
            </div>
            </div>
            </div>
            <ModeToggle />
        </nav>
    )
}