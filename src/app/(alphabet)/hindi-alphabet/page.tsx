import React from "react";

const hindiAlphabets = [
  { letter: "अ", english: "a", bangla: "অ" },
  { letter: "आ", english: "aa", bangla: "আ" },
  { letter: "इ", english: "i", bangla: "ই" },
  { letter: "ई", english: "ee", bangla: "ঈ" },
  { letter: "उ", english: "u", bangla: "উ" },
  { letter: "ऊ", english: "oo", bangla: "ঊ" },
  { letter: "ए", english: "e", bangla: "এ" },
  { letter: "ऐ", english: "ai", bangla: "ঐ" },
  { letter: "ओ", english: "o", bangla: "ও" },
  { letter: "औ", english: "au", bangla: "ঔ" },
  { letter: "क", english: "ka", bangla: "ক" },
  { letter: "ख", english: "kha", bangla: "খ" },
  { letter: "ग", english: "ga", bangla: "গ" },
  { letter: "घ", english: "gha", bangla: "ঘ" },
  { letter: "च", english: "cha", bangla: "চ" },
  { letter: "छ", english: "chha", bangla: "ছ" },
  { letter: "ज", english: "ja", bangla: "জ" },
  { letter: "झ", english: "jha", bangla: "ঝ" },
  { letter: "ट", english: "ṭa", bangla: "ট" },
  { letter: "ठ", english: "ṭha", bangla: "ঠ" },
  { letter: "ड", english: "ḍa", bangla: "ড" },
  { letter: "ढ", english: "ḍha", bangla: "ঢ" },
  { letter: "ण", english: "ṇa", bangla: "ণ" },
  { letter: "त", english: "ta", bangla: "ত" },
  { letter: "थ", english: "tha", bangla: "থ" },
  { letter: "द", english: "da", bangla: "দ" },
  { letter: "ध", english: "dha", bangla: "ধ" },
  { letter: "न", english: "na", bangla: "ন" },
  { letter: "प", english: "pa", bangla: "প" },
  { letter: "फ", english: "pha", bangla: "ফ" },
  { letter: "ब", english: "ba", bangla: "ব" },
  { letter: "भ", english: "bha", bangla: "ভ" },
  { letter: "म", english: "ma", bangla: "ম" },
  { letter: "य", english: "ya", bangla: "য" },
  { letter: "र", english: "ra", bangla: "র" },
  { letter: "ल", english: "la", bangla: "ল" },
  { letter: "व", english: "va", bangla: "ভ/ব" },
  { letter: "श", english: "sha", bangla: "শ" },
  { letter: "ष", english: "ṣa", bangla: "ষ" },
  { letter: "स", english: "sa", bangla: "স" },
  { letter: "ह", english: "ha", bangla: "হ" },
];

const HindiAlphabet = () => {
  return (
    <div className="min-h-screen bg-yellow-50 p-6 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-orange-600 mb-6 text-center">
        Hindi Alphabet Chart
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full max-w-6xl">
        {hindiAlphabets.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-orange-200 p-4 rounded-xl text-center space-y-2"
          >
            <div className="text-3xl font-semibold text-orange-700">{item.letter}</div>
            <div className="text-sm text-gray-600">
              <strong>English:</strong> {item.english}
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

export default HindiAlphabet;
