import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/hero.jpg" alt="hero image" fill className="object-cover object-top w-full h-full"/>
        <div className="absolute inset-0 bg-black opacity-85"></div>
      </div>
      <div className="relative flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-7xl font-extrabold leading-tight mb-3 capitalize px-4 sm:px-8 lg:px-16">Sun Eater: <br />Indonesia’s future talents</h1>
        <p className="text-xl text-gray-300 mb-8 px-4 sm:px-8 lg:px-24">Today they represent Indonesia’s young talents – from Hindia, .Feast, Agatha Pricilla, Lomba Sihir, <br /> Mantra Vutura, Aldrian Risjad, to Rayhan Noor. </p>
        <div className="flex gap-5">
          <Link href="/about" className="bg-black text-white hover:bg-gray-00 py-2.5 px-6 md:px-10 text-lg font-semibold rounded-3xl hover:scale-105 hover: shadow-lg">Get to Know!</Link>
          <Link href="/contact" className=" bg-white border-gray-400 text-black hover:bg-gray-300 py-2.5 px-6 md:px-10 text-lg font-semibold rounded-3xl hover:scale-105 hover: shadow-lg">Contact Us!</Link>
        </div>
      </div>
    </div>
  )
}

export default Hero