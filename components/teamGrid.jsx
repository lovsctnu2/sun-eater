
import Image from "next/image";
import Link from "next/link";
import talentsData from '../data/talentsData'; 

const TeamGrid = ({ title, members, isTalent = false }) => {
  return (
    <div className="bg-gray-100 py-12 md:py-16">
      <div className="max-w-screen-lg mx-auto py-8 md:pt-10 pb-14">
        <div className="border-b border-gray-300 pb-8 mb-8"></div>
        <h2 className="text-gray-800 text-5xl font-bold mb-8 text-left">
          Talents
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-6 lg:gap-8">
          {talentsData.map((member) => (
            <div key={member.id} className="relative group overflow-hidden">
              {isTalent && member.link ? (
                <Link href={member.link}>
                  <div className="relative w-full h-auto aspect-[1/1] overflow-hidden rounded-lg">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      layout="fill"
                      objectFit="contain"
                      className="grayscale-on-hover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  </div>
                </Link>
              ) : (
                <div className="relative w-full h-auto aspect-[1/1] overflow-hidden rounded-lg">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    layout="fill"
                    objectFit="cover"
                    className="grayscale-on-hover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                </div>
              )}

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                {!isTalent && member.position && (
                  <p className="text-sm text-gray-600">{member.position}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;