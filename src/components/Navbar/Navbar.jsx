import { link } from 'framer-motion/client'
import React, { useState } from 'react'
import { IoMdApps, IoMdClose } from "react-icons/io";
import { SlEarphones } from 'react-icons/sl';
import { UpdateFollower } from 'react-mouse-follower'
import { motion } from 'framer-motion';
import ResponsiveMenu from './ResponsiveMenu';


const NavbarMenu =[
    {
        id: 1,
        title: "Home",
links:"/",
 },
    {
        id: 2,
        title: "Services",
links:"#",
 },
    {
        id: 3,
        title: "Blogs",
links:"#",
 },
    {
        id: 4,
        title: "About",
links:"#",
 },
    {
        id: 5,
        title: "Contact",
links:"#",
 },
]
const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <div className='bg-brandDark/90 text-white py-6 font-varela'>
    <motion.nav
    initial= {{ opacity: 0}}
animate= {{ opacity: 1}}
transition={{ duration:1, delay:0.5 }}
    className='container flex justify-between items-center'>
        {/* Logo section  */}
        <div>
            <a href="#" className='text-xl font-bold uppercase'>
                Headset / <span className='font-extralight text-white/70'>Market</span>
            </a>
        </div>
        {/* Menu Section  */}
        <div className='hidden md:block'>
            <ul className='flex items-center gap-4'>
                {
                    NavbarMenu.map((item)=>(
                    <li key={item.id}>
                <UpdateFollower
                mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference"
                }}
                >
                <a href={item.links} className='inline-block text-sm
               py-2 px-3 uppercase '>{item.title}</a>
                </UpdateFollower>
                
                    </li>
                    ))
                }
                   <UpdateFollower
                mouseOptions={{
                    backgroundColor: "white",
                    zIndex: 999,
                    followSpeed: 1.5,
                    scale: 5,
                    mixBlendMode: "difference"
                }}
                >
                 <button className='text-xl ps-14'>
                    <SlEarphones/>
                    </button>
                </UpdateFollower>
                
              
                
            </ul>
        </div>
        {/* Mobile section  */}
        <div className='md:hidden ' onClick={() =>setOpen(!open)}>
        {open ? (
            <IoMdClose className="text-4xl" /> // Render close icon if open
          ) : (
            <IoMdApps className="text-4xl" /> // Render app icon if closed
          )}
        </div>
    </motion.nav>
    </div>
    <ResponsiveMenu open={open}/>
    </>
  )
}

export default Navbar