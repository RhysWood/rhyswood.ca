import React from 'react'
import Image from "next/image";

const Icons = () => {
  return (
    <div className='grid grid-cols-3 md:flex gap-4 md:gap-6 p-4 md:p-6 mt-6'>
      {[
        { src: "/assets/icons/Next.js.png", alt: "Next.js" },
        { src: "/assets/icons/React.png", alt: "React" },
        { src: "/assets/icons/Sanity.png", alt: "Sanity.io" },
        { src: "/assets/icons/Vercel.png", alt: "Vercel" },
        { src: "/assets/icons/NPM.png", alt: "NPM" },
        { src: "/assets/icons/MongoDB.png", alt: "MongoDB" },
      ].map((icon, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={30}
            height={30}
            className="w-8 md:w-10 h-8 md:h-10 hover:scale-110 transition-transform"
            priority
          />
        </div>
      ))}
    </div>
  )
}

export default Icons
