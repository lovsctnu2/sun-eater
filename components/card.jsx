import Link from "next/link";
import Image from "next/image";

const card = ({ id, name, position, photo }) => {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
      <Link href={`/team/${id}`}>
        <div className="relative w-full h-64 overflow-hidden">
          <Image
            src={photo}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-white mb-1 truncate">{name}</h3>
          <p className="text-gray-400 text-sm">{position}</p>
        </div>
      </Link>
    </div>
  )
}

export default card
