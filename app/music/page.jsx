"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import talentsData from '../../data/talentsData';

const MusicPage = () => {
  const [inputSearchTerm, setInputSearchTerm] = useState('');
  const [activeSearchTerm, setActiveSearchTerm] = useState('');
  const filteredTalents = useMemo(() => {
    if (!activeSearchTerm) {
      return talentsData;
    }
    const lowerCaseSearchTerm = activeSearchTerm.toLowerCase();
    return talentsData.filter(talent =>
      talent.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      (talent.genre && talent.genre.toLowerCase().includes(lowerCaseSearchTerm))
    );
  }, [activeSearchTerm]);

  const handleSearch = () => {
    setActiveSearchTerm(inputSearchTerm);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-screen-lg mx-auto mt-24 mb-24 px-4 sm:px-6 lg:px-8"> 
        <h1 className="text-4xl font-bold text-gray-800 text-left">Our Talents</h1>

        <div className="mb-8 flex space-x-4">
          <input
            type="text"
            placeholder="Cari artis atau genre..."
            className="flex-grow p-3 border border-gray-500 rounded-lg focus:ring-gray-500 text-gray-800"
            value={inputSearchTerm}
            onChange={(e) => setInputSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            onClick={handleSearch}
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
          >
            Cari
          </button>
        </div>

        {filteredTalents.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {filteredTalents.map((talent) => (
              <Link key={talent.id} href={`/music/talents/${talent.id}`} className="block group">
                <div className="relative group overflow-hidden">
                  <div className="relative w-full h-auto aspect-square overflow-hidden rounded-lg shadow-md">
                    <Image
                      src={talent.photo}
                      alt={talent.name}
                      layout="fill"
                      objectFit="cover"
                      className="grayscale-on-hover transform group-hover:scale-105 transition-all duration-500 ease-in-out"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">{talent.name}</h3>
                    {talent.genre && <p className="text-sm text-gray-600">{talent.genre}</p>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 text-gray-600 text-lg">
            Tidak ada artis yang ditemukan dengan kata kunci &quot;{activeSearchTerm}&quot;.
          </div>
        )}
      </div>
    </div>
  );
};

export default MusicPage;