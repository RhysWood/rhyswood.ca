"use client";

import Image from "next/image";

function Proboneo() {
  return (
    <div className="block md:col-span-2 lg:col-span-3">
      <section className="w-full flex flex-col items-center bg-white rounded-xl shadow-lg mt-8 p-4 md:p-6 hover:shadow-2xl transition-shadow min-h-[645px]"> 
        <div className="w-full">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600">
              Pro-Bone-O
            </h2>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold">
              Final Project
            </span>
          </div>
          <div className="mb-4 flex justify-center">
            <Image 
              src="/assets/imgs/proboneo.png" 
              alt="Pro-Bone-O application screenshot"
              width={600}
              height={400}
              className="rounded-lg shadow-md mb-10"
            />
          </div>
          
          <p className="mb-4 text-gray-700 text-base md:text-lg">
            A crowd-sourcing platform that connects dog owners with passionate dog walkers and sitters who provide services out of their love for dogs. Pro-Bone-O serves as an intermediary, facilitating trust and convenience for both sides of the pet care community.
          </p>
          
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Key Features:</h3>
            <ul className="list-disc list-inside mb-4 text-gray-800 text-base md:text-lg space-y-1">
              <li>User authentication and profile management</li>
              <li>Post and browse dog care listings</li>
              <li>Real-time instant messaging between users</li>
              <li>Booking history and listing management</li>
              <li>Location-based matching with Google Maps integration</li>
            </ul>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Tech Stack:</h3>
            <div className="grid grid-cols-2 gap-2 text-sm md:text-base text-gray-700">
              <div>
                <strong>Frontend:</strong>
                <ul className="ml-4 mt-1">
                  <li>• ReactJS</li>
                  <li>• Material UI</li>
                  <li>• Recoil (State Management)</li>
                </ul>
              </div>
              <div>
                <strong>Backend:</strong>
                <ul className="ml-4 mt-1">
                  <li>• Node.js & Express</li>
                  <li>• PostgreSQL</li>
                  <li>• Prisma ORM</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">APIs Integrated:</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Google Maps</span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Geocoding</span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">Pusher</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">Twilio</span>
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">Dog Breed API</span>
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center">
              <p className="text-orange-800 font-medium">🐕 Connecting Dog Lovers</p>
              <p className="text-orange-600 text-sm mt-1">Making pet care accessible and community-driven</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Proboneo;
