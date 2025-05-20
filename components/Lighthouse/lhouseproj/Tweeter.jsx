"use client";

import Image from "next/image";

function Tweeter() {
  return (
    <a
      href="https://github.com/RhysWood/tweeter" 
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-105"
    >
    <section className="max-w-md mx-auto flex flex-col items-center bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow min-h-[645px]">
        <div className="w-full flex justify-center mb-4">
          <Image
            src="/assets/imgs/Tweeter.gif"
            alt="Screenshot of Tweeter project"
            width={320}
            height={180}
            className="rounded-lg border max-w-full h-auto"
            priority
          />
        </div>
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-ricegreen">Tweeter</h2>
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            Tweeter is a single-page Twitter clone, where users can create short posts of up to 140 characters and have them append to the main page. Posts are sequential, with the most recent posts appearing at the top of the page. Tweeter fetches a list of posts from a simplified ‘server’ and allows users to add posts to this list dynamically using AJAX and jQuery.
          </p>
          <ul className="list-disc list-inside mb-2 text-gray-800 text-base md:text-lg">
            <li>Build a single page application</li>
            <li>Connect the frontend to a pre-built backend</li>
            <li>Execute on a given design spec</li>
          </ul>
        </div>
      </section>
    </a>
  );
}

export default Tweeter;
