"use client";

import Image from "next/image";

function Tweeter() {
  return (
    <section className="w-full max-w-md mx-auto flex flex-col items-center bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow">
      <div className="w-full">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl md:text-2xl font-bold text-orange-600">
            Tweeter
          </h2>
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
            Frontend Focus
          </span>
        </div>
        
        <div className="mb-4 flex justify-center">
          <Image
            src="/assets/imgs/Tweeter.gif"
            alt="Tweeter single-page application demo"
            width={320}
            height={180}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        
        <p className="mb-4 text-gray-700 text-base md:text-lg">
          A responsive single-page Twitter clone where users can compose and share tweets up to 140 characters. Features real-time posting with dynamic content updates and an intuitive, mobile-first design that adapts beautifully across devices.
        </p>
        
        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2 text-gray-800">Key Features:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-800 text-sm md:text-base space-y-1">
            <li>Real-time tweet composition and posting</li>
            <li>Character counter with visual feedback</li>
            <li>Responsive design for all screen sizes</li>
            <li>Dynamic content loading with AJAX</li>
            <li>Chronological tweet timeline</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2 text-gray-800">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">HTML5</span>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">CSS3</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">JavaScript</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">jQuery</span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">AJAX</span>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
            <p className="text-blue-800 font-medium text-sm">🐦 Frontend Mastery</p>
            <p className="text-blue-600 text-xs mt-1">Interactive & responsive design</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tweeter;
