import Link from 'next/link';
import React from 'react';

import { FaLanguage, FaBookOpen, FaGlobeAmericas } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <h1 className="text-2xl md:text-5xl font-extrabold text-purple-800 mb-12 text-center drop-shadow-lg">
        🌍 Start Learning Languages
      </h1>

      <div className="grid gap-6 w-full max-w-xl">
        {/* Language Learning */}
        <Link
          href="/learnarabic"
          className="bg-gradient-to-r from-cyan-100 to-blue-200 hover:from-white hover:to-white text-purple-800 transition duration-300 p-6 rounded-2xl shadow-lg text-center text-base font-semibold hover:scale-105 transform"
        >
          <FaLanguage className="mx-auto mb-2 text-3xl text-purple-500" />
          Arabic ⟷ English ⟷ हिंदी ⟷ বাংলা
          <br />
          <span className="text-sm">English ⟷ हिंदी</span>
          <br />
          <span className="text-sm">हिंदी ⟷ বাংলা</span>
        </Link>

        {/* Arabic Alphabet */}
        <Link
          href="/daily-sentences"
          className="bg-gradient-to-r from-violet-400-100 to-red-200 hover:from-white hover:to-white text-purple-800 transition duration-300 p-6 rounded-2xl shadow-lg text-center text-base font-semibold hover:scale-105 transform"
        >
          <FaBookOpen className="mx-auto mb-2 text-3xl text-blue-500" />
          Daily Used Sentences <br />
          Arabic ⟷  हिंदी ⟷ বাংলা  
          <br />
          <span className="text-sm">Sentence | वाक्य | বাক্য </span>
          
        </Link>
        {/* Learn Arabic and hindi sentences */}
        <Link
          href="/arabic-alphabet"
          className="bg-gradient-to-r from-green-100 to-teal-200 hover:from-white hover:to-white text-purple-800 transition duration-300 p-6 rounded-2xl shadow-lg text-center text-base font-semibold hover:scale-105 transform"
        >
          <FaBookOpen className="mx-auto mb-2 text-3xl text-green-500" />
          Arabic Alphabet
          <br />
          <span className="text-sm">अरबी अक्षर</span>
          <br />
          <span className="text-sm">আরবি </span>
        </Link>

        {/* English Alphabet */}
        <Link
          href="/english-alphabet"
          className="bg-gradient-to-r from-yellow-100 to-orange-200 hover:from-white hover:to-white text-purple-800 transition duration-300 p-6 rounded-2xl shadow-lg text-center text-base font-semibold hover:scale-105 transform"
        >
          <FaGlobeAmericas className="mx-auto mb-2 text-3xl text-yellow-600" />
          English Alphabet
          <br />
          <span className="text-sm">अंग्रेजी वर्णमाला</span>
          <br />
          <span className="text-sm">ইংরেজি বর্ণমালা</span>
        </Link>

        {/* Hindi Alphabet */}
        <Link
          href="/hindi-alphabet"
          className="bg-gradient-to-r from-pink-100 to-purple-200 hover:from-white hover:to-white text-purple-800 transition duration-300 p-6 rounded-2xl shadow-lg text-center text-base font-semibold hover:scale-105 transform"
        >
          <FaBookOpen className="mx-auto mb-2 text-3xl text-pink-500" />
          Hindi Alphabet
          <br />
          <span className="text-sm">हिंदी वर्णमाला</span>
          <br />
          <span className="text-sm">হিন্দি বর্ণমালা</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
