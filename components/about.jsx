import Image from "next/image";
import Link from "next/link";
import TeamSection from "./TeamSection";
import teamMembers from '../data/teamMembers';

const About = () => {
  return (
    <div className="bg-gray-100 pt-16 md:pt-24 pb-8 md:pb-16">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <div className="w-full md:w-2/5 text-center md:text-left">
            <Link href="/">
              <Image
                src="/SunEater.jpg"
                width={900}
                height={900}
                alt="sun-eater"
                className="mx-auto w-full max-w-xs sm:max-w-sm md:max-w-full pt-24"
              />
            </Link>
          </div>
          <div className="text-gray-900 md:w-3/5 font-light pt-6 md:pt-10 pl-0 md:pl-10">
            <h2 className="text-xl sm:text-5xl font-bold leading-tight mb-4 md:mb-5">About</h2>
            <p className="text-justify font-normal pb-6 md:pb-10">
              Sun Eater is a hybrid music-entertainment company, aiming to bring Indonesia’s future talents forward. Founded in 2019, Sun Eater has seen an exponential growth as a business by harnessing the two most powerful mediums of our age: technology and storytelling with a fan-focused approach to grow the audience and develop a deep relevance for its artists. Today they represent Indonesia’s young talents – from Hindia, .Feast, Agatha Pricilla, Lomba Sihir, Mantra Vutura, Aldrian Risjad, to Rayhan Noor. With the latest addition being the virtual music band G/A/T/E. Sun Eater’s independent business pillars currently being called Sun Eater Group (SEG) are divided into SEG Labels for its record labels and music production, SEG+ for producing creative contents, products, live events tp all commercialization across IPs, and later SEG platform to cater community fanbases.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 py-4 text-center text-base text-gray-800 my-8 md:my-10">
        </div>

        <div className="w-full text-center mt-12 md:mt-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-8">Sun Eater Wheel</h2>
          <Link href="/">
            <Image
              src="/sunEaterWheel.png"
              width={1200}
              height={1200}
              alt="sun-eater"
              className="mx-auto w-full max-w-sm sm:max-w-md md:max-w-xl pt-8 pb-10 md:pb-20"
            />
          </Link>
        </div>

        <div className="border-t border-gray-800 py-4 text-center text-base text-gray-800 my-8 md:my-10">
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-10 md:mb-20">Meet Our Team</h2>
        <TeamSection members={teamMembers} title="Our Team" />
      </div>
    </div>
  )
}

export default About;