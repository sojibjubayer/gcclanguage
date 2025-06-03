import React from "react";

const englishAlphabetData = [
  { letter: "A", hindi: "ए", bangla: "এ" },
  { letter: "B", hindi: "बी", bangla: "বি" },
  { letter: "C", hindi: "सी", bangla: "সি" },
  { letter: "D", hindi: "डी", bangla: "ডি" },
  { letter: "E", hindi: "ई", bangla: "ই" },
  { letter: "F", hindi: "एफ", bangla: "এফ" },
  { letter: "G", hindi: "जी", bangla: "জি" },
  { letter: "H", hindi: "एच", bangla: "এইচ" },
  { letter: "I", hindi: "आई", bangla: "আই" },
  { letter: "J", hindi: "जे", bangla: "জে" },
  { letter: "K", hindi: "के", bangla: "কে" },
  { letter: "L", hindi: "एल", bangla: "এল" },
  { letter: "M", hindi: "एम", bangla: "এম" },
  { letter: "N", hindi: "एन", bangla: "এন" },
  { letter: "O", hindi: "ओ", bangla: "ও" },
  { letter: "P", hindi: "पी", bangla: "পি" },
  { letter: "Q", hindi: "क्यू", bangla: "কিউ" },
  { letter: "R", hindi: "आर", bangla: "আর" },
  { letter: "S", hindi: "एस", bangla: "এস" },
  { letter: "T", hindi: "टी", bangla: "টি" },
  { letter: "U", hindi: "यू", bangla: "ইউ" },
  { letter: "V", hindi: "वी", bangla: "ভি" },
  { letter: "W", hindi: "डब्ल्यू", bangla: "ডাবলিউ" },
  { letter: "X", hindi: "एक्स", bangla: "এক্স" },
  { letter: "Y", hindi: "वाई", bangla: "ওয়াই" },
  { letter: "Z", hindi: "ज़ेड", bangla: "জেড" },
];

const EnglishAlphabet = () => {
  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-blue-50 to-green-100 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">
        English Alphabet with Hindi & Bangla Transliteration
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 w-full max-w-6xl">
        {englishAlphabetData.map((item) => (
          <div
            key={item.letter}
            className="bg-white rounded-xl p-4 shadow border text-center space-y-2 hover:shadow-lg transition"
          >
            <div className="text-2xl font-bold text-blue-700">{item.letter}</div>
            <div className="text-sm text-gray-600">
              <strong>Hindi:</strong> {item.hindi}
            </div>
            <div className="text-sm text-gray-600">
              <strong>Bangla:</strong> {item.bangla}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnglishAlphabet;
