import Link from "next/link";
import Image from "next/image";
import Navlink from "@/components/navbar/navlink";

const navbar = () => {
  return (
    <div className="fixed top-10 left-0 right-0 z-30">
        <div className="max-w-screen-xl mx-auto rounded-3xl bg-black shadow-xl px-6 py-4 flex items-center justify-between">
            <Link href="/">
            <Image src="/Logo.svg" width={216} height={70} alt="logo" priority></Image>
            </Link>
            <Navlink />
        </div>
    </div>
  )
}

export default navbar
