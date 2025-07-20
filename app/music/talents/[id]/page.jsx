
import Image from 'next/image';
import Link from 'next/link';
import talentsData from '../../../../data/talentsData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return talentsData.map((talent) => ({
    id: talent.id,
  }));
}

export async function generateMetadata({ params }) {
  const talent = talentsData.find((item) => item.id === params.id);

  if (!talent) {
    return {
      title: 'Talent Tidak Ditemukan',
      description: 'Halaman talent yang Anda cari tidak ada.',
    };
  }

  return {
    title: `${talent.name} - Sun Eater Talents`,
    description: talent.bio.substring(0, 150) + '...',
    openGraph: {
      images: talent.photo ? [{ url: talent.photo }] : [],
    },
  };
}

const TalentDetailPage = ({ params }) => {
  const { id } = params;

  const talent = talentsData.find((item) => item.id === id);

  if (!talent) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 pt-40 pb-16 max-w-4xl">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 flex-shrink-0 rounded-full overflow-hidden shadow-md">
          <Image
            src={talent.photo}
            alt={talent.name}
            layout="fill"
            objectFit="cover"
            className="object-cover"
          />
        </div>
        <div className="text-center md:text-left flex-grow">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2 leading-tight">
            {talent.name}
          </h1>
          <p className="text-xl text-gray-600 font-medium mb-4">{talent.genre}</p>

          <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed mb-6">
            <p>{talent.bio}</p>
          </div>

          {talent.albums && talent.albums.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">Albums</h2>
              <ul className="list-disc list-inside text-gray-700">
                {talent.albums.map((album, index) => (
                  <li key={index}>{album.title} ({album.year})</li>
                ))}
              </ul>
            </div>
          )}

          {talent.socialMedia && (
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {talent.socialMedia.instagram && (
                <Link
                  href={talent.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm"
                >
                  Instagram
                </Link>
              )}
              {talent.socialMedia.spotify && (
                <Link
                  href={talent.socialMedia.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition-colors duration-200 text-sm"
                >
                  Spotify
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/music"
          className="text-gray-600 hover:underline text-lg font-medium hover:text-gray-800"
        >
          &larr; Kembali ke Daftar Talents
        </Link>
      </div>
    </div>
  );
};

export default TalentDetailPage;