"use client";

import Image from "next/image";

function TinyApp() {
  return (
    <section className="w-full max-w-md mx-auto flex flex-col items-center bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow">
      <div className="w-full">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl md:text-2xl font-bold text-orange-600">
            TinyApp
          </h2>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
            First Full-Stack
          </span>
        </div>
        
        <div className="mb-4 flex justify-center">
          <Image
            src="/assets/imgs/TinyApp.png"
            alt="TinyApp URL shortener interface"
            width={320}
            height={180}
            className="rounded-lg shadow-md"
            priority
          />
        </div>
        
        <p className="mb-4 text-gray-700 text-base md:text-lg">
          A full-stack URL shortener that allows users to create, manage, and share shortened links. This project was my introduction to server-side development, teaching me the fundamentals of web authentication and secure data handling.
        </p>
        
        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2 text-gray-800">Key Learning Areas:</h3>
          <ul className="list-disc list-inside mb-4 text-gray-800 text-sm md:text-base space-y-1">
            <li>Server-side rendering with Express & Node.js</li>
            <li>User authentication and session management</li>
            <li>Secure password hashing and storage</li>
            <li>Cookie handling and security best practices</li>
            <li>RESTful routing and middleware</li>
          </ul>
        </div>

        <div className="mb-4">
          <h3 className="text-base font-semibold mb-2 text-gray-800">Tech Stack:</h3>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">Node.js</span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Express</span>
            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">EJS</span>
            <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">bcrypt</span>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
            <p className="text-green-800 font-medium text-sm">🔗 My First Backend</p>
            <p className="text-green-600 text-xs mt-1">Learning server fundamentals</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TinyApp;
