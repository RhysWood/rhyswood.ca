"use client";

import Image from "next/image";

function LightBnb() {
  return (
    <section className="w-full max-w-md mx-auto flex flex-col items-center bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow">
      <div className="w-full">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl md:text-2xl font-bold text-orange-600">
            LightBnb
          </h2>
          <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold">
            Database Design
          </span>
        </div>
        
        <div className="mb-4 flex justify-center">
          <Image
            src="/assets/imgs/ERD.png"
            alt="LightBnb Entity Relationship Diagram"
            width={320}
            height={180}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        
        <p className="mb-4 text-gray-700 text-base md:text-lg">
          A comprehensive database-driven application inspired by Airbnb. This project focused on database architecture, complex SQL queries, and seamless integration between PostgreSQL and Node.js. The skills learned here directly contributed to building racein30.com.
        </p>
        
        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2 text-gray-800">Database Skills Developed:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-800 text-sm md:text-base space-y-1">
            <li>Entity Relationship Diagram (ERD) design</li>
            <li>Complex SQL query writing and optimization</li>
            <li>Database seeding and migration strategies</li>
            <li>Node.js database integration patterns</li>
            <li>Data validation and relationship management</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2 text-gray-800">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">PostgreSQL</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Node.js</span>
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">SQL</span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">ERD Design</span>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-3 text-center">
            <p className="text-indigo-800 font-medium text-sm">🗄️ Database Foundation</p>
            <p className="text-indigo-600 text-xs mt-1">Applied to racein30.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LightBnb;
