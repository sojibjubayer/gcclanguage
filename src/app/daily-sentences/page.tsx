'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const lessonTypes = [
  { value: "greetings", label: "Greetings" },
  { value: "travelandnavigation", label: "Travel & Navigation" },
  { value: "foodanddining", label: "Food and Dining" },
  { value: "shoppingandcurrency", label: "Shopping and Currency" },
  { value: "numbersandcounting", label: "Numbers and Counting" },
  { value: "timeanddates", label: "Time and Dates" },
  { value: "weatherandseasons", label: "Weather and Seasons" },
];

const DailySentences: React.FC = () => {
  const router = useRouter();

  const handleStart = (type: string) => {
    router.push(`/sentences/${type}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-6">
      <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-700 mb-10">
        Daily Needs S
        <span className='text-blue-700'>e</span>
        nt
        <span className='text-red-700'>e</span>
        n
        <span className='text-purple-700'>e</span>
        cs
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center">
        {lessonTypes.map((lesson) => (
          <div
            key={lesson.value}
            className="bg-gradient-to-r from-violet-100 to-red-100 p-6 rounded-2xl shadow-md border border-purple-200 text-center"
          >
            <h2 className="text-xl font-semibold text-gray-700 mb-4">
              {lesson.label}
            </h2>
            <button
              onClick={() => handleStart(lesson.value)}
              className="px-5 py-2 bg-red-300 text-gray-900 hover:text-gray-700 rounded-xl hover:bg-white transition"
            >
              Start Lesson
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailySentences;
