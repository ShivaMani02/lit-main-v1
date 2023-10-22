'use client'
import React from 'react'
import Image from 'next/image'
import openLink from '@assets/openLink.svg'
import { motion } from 'framer-motion'
import { textVariant2 } from '@council/utils/motion'
import { styles } from '@council/app/styles'

export default function LiveUpdates() {
  return (
    <section
      id="branches"
      className="md:px-32 px-8 py-24 shadow-inner bg-[#f3f2f2d3]"
    >
      <motion.div variants={textVariant2()} initial="hidden" animate="show">
        <p
          className={`text-green-700  ${styles.sectionSubText} font-bold transform rotate-x-30 origin-bottom`}
        >
          Live Updates : We are launching our website!!!
        </p>
      </motion.div>
      {/* <div className="flex mt-10 flex-wrap md:px-32 px-5 gap-10 justify-center items-center">
        <div className="flex w-1/2 flex-col bg-wh-primary  drop-shadow-md rounded-lg gap-2 font-extralight ">
          <div className="flex  justify-between items-center p-2">
            <p>upcoming event</p>
            <a href="" className=" cursor-pointer">
              <Image src={openLink} alt="openLink" width={15} />
            </a>
          </div>
          <hr />
        </div>
      </div> */}

      <div className="flex mt-10 flex-wrap md:px-32 px-5 gap-10 justify-center items-center">
        <div className="flex w-1/2 flex-col bg-wh-primary  drop-shadow-md rounded-lg gap-2 font-extralight ">
          <div className="flex  justify-between items-center p-2">
            <p>May the triumph of good over evil on this Dussehra inspire us to overcome challenges and embrace a brighter, more harmonious future. Happy Dussehra!</p>
            {/* <a href="" className=" cursor-pointer">
              <Image src={openLink} alt="openLink" width={15} />
            </a> */}
          </div>
          <hr />
        </div>
      </div>


      <div className="flex mt-10 flex-wrap md:px-32 px-5 gap-10 justify-center items-center">
        <div className="flex w-1/2 flex-col bg-wh-primary  drop-shadow-md rounded-lg gap-2 font-extralight ">
          <div className="flex  justify-between items-center p-2">
            <p>Kavyasarita: Where verses flow like a river, weaving tales of emotions and dreams, celebrating the timeless beauty of poetry.</p>
            {/* <a href="" className=" cursor-pointer">
              <Image src={openLink} alt="openLink" width={15} />
            </a> */}
          </div>
          <hr />
        </div>
      </div>

      <div className="flex mt-10 flex-wrap md:px-32 px-5 gap-10 justify-center items-center">
        <div className="flex w-1/2 flex-col bg-wh-primary  drop-shadow-md rounded-lg gap-2 font-extralight ">
          <div className="flex  justify-between items-center p-2">
            <p>Sahityotsava: A literary festival that ignites minds, celebrates words, and creates a symphony of stories and ideas, uniting literature enthusiasts from all horizons.</p>
            {/* <a href="" className=" cursor-pointer">
              <Image src={openLink} alt="openLink" width={15} />
            </a> */}
          </div>
          <hr />
        </div>
      </div>
      
    </section>
  )
}
