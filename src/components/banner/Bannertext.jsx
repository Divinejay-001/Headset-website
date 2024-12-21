import React from 'react'
import { UpdateFollower } from 'react-mouse-follower'
import { FadeUp, FadeLeft } from '../Services/service'
import { motion } from 'framer-motion'

const Bannertext = () => {
  return (
    <section className=' py-12 text-center font-varela' >
        <div className='container'>
             <div
             
             className='bg-gradient-to-t from-primary to-primary/70 
             text-white rounded-3xl p-8 hover:scale-105 duration-500 hover:shadow-2xl'>
                <UpdateFollower 
                  mouseOptions={{
                    backgroundColor: "black",
                    zIndex: 9999,
                    followSpeed: 0.5,
                    mixBlendMode: 'screen',
                    scale: 10,
                  }}
                >
                <motion.p
                   variants={FadeLeft(0.5)}
                   initial= 'hidden'
                   whileInView={'visible'}
                className='font-bold text-4xl max-w-[700px]
                mx-auto leading-normal'>Headphones With Good Quality And Affordable Prices</motion.p>
                </UpdateFollower>
              
             </div>
        </div>
    </section> 
  )
}

export default Bannertext