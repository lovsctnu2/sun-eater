
import Image from "next/image";
import Link from "next/link";
import teamMembers from '../data/teamMembers'; 

const TeamSection = () => {
  return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-13">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-gray-950 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="relative w-full" style={{ paddingTop: '100%' }}>
                <Image
                  src={member.photo}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
  );
};

export default TeamSection;