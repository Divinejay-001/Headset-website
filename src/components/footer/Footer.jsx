import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaMapLocation, FaPhone, FaTwitter } from 'react-icons/fa6'
import Cards from '../../assets/credit-cards.webp'
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className=' bg-primary/70 md:bg-primary pt-12 pb-8 text-white '>
        <div className='container '>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
         gap-8 '>
 {/* Details  */}
 <motion.div
 initial= {{ opacity: 0}}
 whileInView= {{ opacity: 1, y: 0 }}
 transition={{ duration:0.6, delay:0.2 }}
 className='space-y-2  md:space-y-6'>
  <h1 className='text-3xl font-bold uppercase'>Playing</h1>
  <p className='text-sm max-w-[300px]'>
 
    Embrace the joy of discovery, where every moment spent playing becomes a step toward a brighter, more creative future.
  </p>
  <div>
    <p className='flex items-center gap-2'>
      <FaPhone />
      (#234) 9127064183     </p>
    <p className='flex items-center gap-2 mt-2'>
      <FaMapLocation />
      Akwa Ibom State, Nigeria 
    </p>
  </div>
</motion.div>


    {/* Footer Links Section  */}
    <motion.div
    initial= {{ opacity: 0}}
    whileInView= {{ opacity: 1, y: 0 }}
    transition={{ duration:0.6, delay:0.4 }}
    className='space-y-2 md:space-y-6'>
      <h1 className='text-3xl font-bold'>Quick Links</h1>
      <div className='grid grid-cols-3 sm:grid-cols-2 gap-3'>
      <div>
  <ul className='space-y-2'>
  <li>Home</li>
  <li>About</li>
  <li>Contact Us</li>
  <li>Privacy policy</li>
  </ul>
</div>
<div>
  <ul className='space-y-2'>
  <li>Home</li>
  <li>About</li>
  <li>Contact Us</li>
  <li>Privacy policy</li>
  </ul>
</div>
      </div>

    </motion.div>
      {/* Socials Link */}
      <motion.div
      initial= {{ opacity: 0}}
      whileInView= {{ opacity: 1, y: 0 }}
      transition={{ duration:0.6, delay:0.6 }}
      className='space-y-6'>
<h1>Follow Us</h1>
<div className='flex items-center gap-3'>
  <FaFacebook className='text-3xl hover:scale-105 duration-300'/>
  <FaInstagram className='text-3xl hover:scale-105 duration-300'/>
  <FaTwitter className='text-3xl hover:scale-105 duration-300'/>
  <FaGithub className='text-3xl hover:scale-105 duration-300'/>
</div>
<div className='space-y-2'>
  <p>Payment Methods</p>
  <img src={Cards} alt="" className='w-[80%]'/>
</div>
      </motion.div>
    
          </div>
            {/* copywright section  */}
            <motion.div
            initial= {{ opacity: 0}}
            whileInView= {{ opacity: 1, y: 0 }}
            transition={{ duration:0.8, delay:0.8 }}
            className='grid text-center mt-8 border-t-2 pt-6'>
              <p >Built By Divinegift Johnson </p>
                    <p className='text-white  '>&copy; 2024. All rights reserved. || My Coding Journey</p>
            </motion.div>

             </div>
    </footer>
  )
}

export default Footer