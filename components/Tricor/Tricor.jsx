"use client";

import React, { useEffect, useRef, useState } from 'react';
import Image from "next/image";
import useOnScreen from '../hooks/useOnScreen';

function Tricor() {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

  const acquisitionDetails = [
    {
      number: "$3B+",
      label: "Revenue",
      description: "North America's largest packaging distributor"
    },
    {
      number: "2000+",
      label: "Team Members",
      description: "Global workforce across operations"
    },
    {
      number: "1902",
      label: "Est.",
      description: "Over a century of packaging expertise"
    }
  ];

  const rebrandTasks = [
    {
      title: "Technical Migration",
      items: [
        "CNAME configuration for ordercans.tricorbraun.ca",
        "SSL certificate implementation",
        "Domain redirect setup",
        "Legacy system compatibility maintenance"
      ]
    },
    {
      title: "Brand Integration",
      items: [
        "Corporate style guide adoption",
        "Color scheme alignment",
        "Typography standardization",
        "Logo and asset implementation"
      ]
    },
    {
      title: "User Experience",
      items: [
        "Preserved existing functionality",
        "Maintained familiar workflows",
        "Updated UI elements",
        "Seamless transition strategy"
      ]
    }
  ];

  return (
    <section id="tricor" ref={ref} className="min-h-screen bg-tbpeach py-16 px-6 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="mb-8">
            <Image
              src="/assets/icons/TBCanadaLogo.png"
              alt="TricorBraun"
              width={500}
              height={500}
              className="mx-auto transition-transform hover:scale-105"
              priority
            />
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold font-NeueMontrealBold text-gray-800 mb-6">
            The Acquisition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In 2023, Vessel Packaging was acquired by TricorBraun, bringing our digital ordering platform
            into North America's largest packaging distributor's ecosystem.
          </p>
        </div>

        {/* Before & After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className={`transform transition-all duration-500 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
          }`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Before</h3>
            <Image
              src="/assets/imgs/vesselhome.png"
              alt="Vessel Original Design"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className={`transform transition-all duration-500 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">After</h3>
            <Image
              src="/assets/imgs/TricorAfter1.png"
              alt="TricorBraun Integration"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Company Scale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {acquisitionDetails.map((detail, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-sm transform transition-all duration-500 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-4xl font-bold text-blue-600 mb-2">{detail.number}</h3>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{detail.label}</h4>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>

        {/* Rebranding Process */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rebrandTasks.map((task, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-xl shadow-sm transform transition-all duration-500 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
              style={{ transitionDelay: `${(index + 3) * 200}ms` }}
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{task.title}</h3>
              <ul className="space-y-2">
                {task.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Tricor;
