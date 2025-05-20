"use client";

import Image from "next/image";

function TinyApp() {
  return (
    <a
      href="https://github.com/RhysWood/tinyapp" 
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-105"
    >
      <section className="max-w-md mx-auto flex flex-col items-center bg-white rounded-xl shadow-lg p-4 md:p-6 hover:shadow-2xl transition-shadow min-h-[645px]">
        <div className="w-full flex justify-center mb-4">
          <Image
            src="/assets/imgs/TinyApp.png"
            alt="Screenshot of TinyApp project"
            width={320}
            height={180}
            className="rounded-lg border max-w-full h-auto mb-6"
            priority
          />
        </div>
        <div className="w-full">
          <h2 className="text-xl md:text-2xl font-bold mb-2 text-ricegreen">TinyApp</h2>
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            TinyApp is a full-stack web app that lets users shorten long URLs, manage their links, and log in to access personalized data. Built with Express and Node.js, it introduced me to sessions, cookies, and user authentication.
          </p>
          <ul className="list-disc list-inside mb-2 text-gray-800 text-base md:text-lg">
            <li>Build a server that handles client requests</li>
            <li>Work with cookies and sessions securely</li>
            <li>Store passwords securely</li>
            <li>Implement user authentication</li>
            <li>Render web pages server-side</li>
          </ul>
        </div>
      </section>
    </a>
  );
}

export default TinyApp;
