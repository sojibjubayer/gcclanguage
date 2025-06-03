import React from "react";

const alphabets = [
  {
    arabic: "ا",
    english: "Alif",
    hindi: "अलिफ़",
    bangla: "আলিফ",
  },
  {
    arabic: "ب",
    english: "Ba",
    hindi: "बा",
    bangla: "বা",
  },
  {
    arabic: "ت",
    english: "Ta",
    hindi: "ता",
    bangla: "তা",
  },
  {
    arabic: "ث",
    english: "Tha",
    hindi: "सा",
    bangla: "থা",
  },
  {
    arabic: "ج",
    english: "Jeem",
    hindi: "जीन",
    bangla: "জীম",
  },
  {
    arabic: "ح",
    english: "Ha",
    hindi: "हा",
    bangla: "হা",
  },
  {
    arabic: "خ",
    english: "Kha",
    hindi: "खा",
    bangla: "খা",
  },
  {
    arabic: "د",
    english: "Dal",
    hindi: "दाल",
    bangla: "দাল",
  },
  {
    arabic: "ذ",
    english: "Dhal",
    hindi: "ज़ाल",
    bangla: "জাল",
  },
  {
    arabic: "ر",
    english: "Ra",
    hindi: "रा",
    bangla: "রা",
  },
  {
    arabic: "ز",
    english: "Zay",
    hindi: "ज़ाय",
    bangla: "জাই",
  },
  {
    arabic: "س",
    english: "Seen",
    hindi: "सीन",
    bangla: "সীন",
  },
  {
    arabic: "ش",
    english: "Sheen",
    hindi: "शीन",
    bangla: "শীন",
  },
  {
    arabic: "ص",
    english: "Saad",
    hindi: "साद",
    bangla: "সাদ",
  },
  {
    arabic: "ض",
    english: "Daad",
    hindi: "दाद",
    bangla: "দাদ",
  },
  {
    arabic: "ط",
    english: "Taa",
    hindi: "ता",
    bangla: "তা",
  },
  {
    arabic: "ظ",
    english: "Zaa",
    hindi: "ज़ा",
    bangla: "জা",
  },
  {
    arabic: "ع",
    english: "Ayn",
    hindi: "ऐन",
    bangla: "আইন",
  },
  {
    arabic: "غ",
    english: "Ghayn",
    hindi: "ग़ैन",
    bangla: "ঘাইন",
  },
  {
    arabic: "ف",
    english: "Fa",
    hindi: "फा",
    bangla: "ফা",
  },
  {
    arabic: "ق",
    english: "Qaf",
    hindi: "क़ाफ़",
    bangla: "ক্বাফ",
  },
  {
    arabic: "ك",
    english: "Kaf",
    hindi: "काफ़",
    bangla: "কাফ",
  },
  {
    arabic: "ل",
    english: "Lam",
    hindi: "लाम",
    bangla: "লাম",
  },
  {
    arabic: "م",
    english: "Meem",
    hindi: "मीम",
    bangla: "মীম",
  },
  {
    arabic: "ن",
    english: "Noon",
    hindi: "नून",
    bangla: "নূন",
  },
  {
    arabic: "ه",
    english: "Ha",
    hindi: "हा",
    bangla: "হা",
  },
  {
    arabic: "و",
    english: "Waw",
    hindi: "वाव",
    bangla: "ওয়াও",
  },
  {
    arabic: "ي",
    english: "Ya",
    hindi: "या",
    bangla: "ইয়া",
  },
];

const ArabicAlphabet = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-rose-100 p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-rose-700 mb-4">
        Arabic Alphabet with Transliteration
      </h1>
      <p className="text-xl text-center text-gray-400 mb-4"> Note: Read from right to left. </p>

      {/* Right-to-left layout for grid */}
      <div
        dir="rtl"
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {alphabets.map((letter, index) => (
          <div
            key={index}
            className="bg-white shadow-md border border-rose-200 rounded-xl p-4 text-center space-y-3"
          >
            {/* Arabic letter in RTL */}
            <div className="text-4xl text-rose-600 font-bold">{letter.arabic}</div>

            {/* Switch back to LTR for other text */}
            <div dir="ltr" className="text-sm text-gray-700">
              <strong>English:</strong> {letter.english}
            </div>
            <div dir="ltr" className="text-sm text-gray-700">
              <strong>Hindi:</strong> {letter.hindi}
            </div>
            <div dir="ltr" className="text-sm text-gray-700">
              <strong>Bangla:</strong> {letter.bangla}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArabicAlphabet;