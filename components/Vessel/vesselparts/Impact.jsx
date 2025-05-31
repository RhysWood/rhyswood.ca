"use client";

import React, { useEffect, useRef, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';

function Impact() {
  const ref = useRef(null);
  const onScreen = useOnScreen(ref);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (onScreen) {
      setIsVisible(true);
    }
  }, [onScreen]);

const features = [
    {
      number: "Multi",
      label: "Region Support",
      description: "Location-specific inventory management across British Columbia, Washington, Alberta, and Ontario"
    },
    {
      number: "Flex",
      label: "Unit System",
      description: "Dynamic conversion between cans, pallets, and hectolitres to match customer preferences"
    },
    {
      number: "Bi",
      label: "Lingual",
      description: "Fully integrated English and French translations using next-intl for Canadian market compliance"
    }
  ];

  const innovations = [
    {
      number: "Auto",
      label: "Address Lookup",
      description: "Phone number-based customer detail retrieval, eliminating manual entry"
    },
    {
      number: "Real-time",
      label: "Lead Time Updates",
      description: "Dynamic updates via Sanity.IO CMS for instant customer communication"
    },
    {
      number: "Dynamic",
      label: "Order Processing",
      description: "Optimized Smartsheet integration with compressed multiple selections"
    }
  ];

  return (
    <section ref={ref} className="py-16 px-6 lg:px-24 bg-gray-50 mb-20">
      <h2 className="text-3xl lg:text-5xl font-bold font-NeueMontrealBold text-gray-800 mb-12 text-center">
        Features & Impact
      </h2>
      
      <div className="space-y-16">
        {/* Core Features */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Core Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((metric, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-sm transform transition-all duration-500 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`
                }}
              >
                <h3 className="text-4xl font-bold text-riceyellow mb-2">{metric.number}</h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{metric.label}</h4>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Innovations */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Technical Innovations</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovations.map((metric, index) => (
              <div
                key={index}
                className={`bg-white p-6 rounded-xl shadow-sm transform transition-all duration-500 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: `${(index + 3) * 200}ms`
                }}
              >
                <h3 className="text-4xl font-bold text-riceyellow mb-2">{metric.number}</h3>
                <h4 className="text-xl font-semibold text-gray-800 mb-2">{metric.label}</h4>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Impact;
