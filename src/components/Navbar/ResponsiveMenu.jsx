import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { div } from 'framer-motion/client'
import { Link } from 'react-scroll'
const ResponsiveMenu = ({ open }) => {
  return (
<AnimatePresence mode='wait'>
  {
    open && (
      <motion.div
      initial= {{ opacity: 0, y: -100}}
      animate = {{ opacity: 1, y: 0}}
      exit={{ opacity: 0, y: -100}}
      transition={{ duration: 0.3 }}
      className='absolute top-20 left-0 w-full h-screen z-20'>
        <div className='text-xl  font-semibold uppercase bg-primary/95 text-white py-4 m-6 rounded-3xl'>
          <ul className=' flex flex-col items-center gap-10'>
            <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} >Home</Link>
            <Link activeClass='active' to='services' spy={true} smooth={true} offset={-100} duration={500}>Services</Link>
            <Link activeClass='active' to='blogs' spy={true} smooth={true} offset={-100} duration={500}>Blogs</Link>
            <Link activeClass='active' to='banner' spy={true} smooth={true} offset={-100} duration={500}>About</Link>
            <Link activeClass='active' to='footer' spy={true} smooth={true} offset={-100} duration={500}>Contact</Link>
          </ul>
          </div>
      </motion.div>
    )
  }
</AnimatePresence> 
 )
}

export default ResponsiveMenu