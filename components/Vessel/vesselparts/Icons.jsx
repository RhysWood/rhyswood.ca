import React from 'react'
import Image from "next/image";

const Icons = () => {
  return (
    <div className='flex gap-6 p-6 mt-6'>
        <div>
        <Image
              src="/assets/icons/Next.js.png"
              alt=""
              width={30}
              height={30}
              className=""
              priority
            />
        </div>

        <div>
        <Image
              src="/assets/icons/React.png"
              alt=""
              width={30}
              height={30}
              className=""
              priority
            />
        </div>

        <div>
        <Image
              src="/assets/icons/Sanity.png"
              alt=""
              width={30}
              height={30}
              className=""
              priority
            />
        </div>

        <div>
        <Image
              src="/assets/icons/Vercel.png"
              alt=""
              width={30}
              height={30}
              className=""
              priority
            />
        </div>

        <div>
        <Image
              src="/assets/icons/NPM.png"
              alt=""
              width={30}
              height={30}
              className=""
              priority
            />
        </div>

        <div>
        <Image
              src="/assets/icons/MongoDB.png"
              alt=""
              width={30}
              height={30}
              className=""
              priority
            />
        </div>
        
    </div>
  )
}

export default Icons