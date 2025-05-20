"use client";

import Image from "next/image";

function LightBnb() {
  return (
    <a
      href="https://github.com/RhysWood/LightBnb"
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-105"
    >
      <section className="max-w-md mx-auto flex flex-col items-center bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow min-h-[645px]">
        <div className="w-full flex justify-center mb-4">
          <Image
            src="/assets/imgs/ERD.png"
            alt="Screenshot of LightBnb project"
            width={320}
            height={180}
            className="rounded-lg border max-w-full h-auto"
            priority
          />
        </div>
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-ricegreen">LightBnb</h2>
  <p className="mb-4 text-gray-700 text-base md:text-lg">
    LightBnb is a project focused on database design and integration with a Node.js backend. I used SQL and ERD design to connect, query, and display data on web pages.
    <br />
  </p>
          <ul className="list-disc list-inside mb-2 text-gray-800 text-base md:text-lg">
            <li>Design and create a database with ERD</li>
            <li>Write and test SQL queries</li>
            <li>Connect the database to a JavaScript app</li>
              <li>Seed the database with test data</li>
  <li>Display query results on web pages</li>
          </ul>
        </div>
      </section>
    </a>
  );
}

export default LightBnb;
