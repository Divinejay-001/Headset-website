import React from 'react'
import Blogs1 from '../../assets/blogs/blog1.jpg';
import Blogs2 from '../../assets/blogs/blog2.jpg';
import Blogs3 from '../../assets/blogs/blog3.jpg';
import Blogs4 from '../../assets/blogs/blog4.jpg';
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';
import { FadeUp } from '../Services/service';


const BlogsData = [
    {
      id: 1,
      title: "Top 10 Wireless Headsets for Gamers in 2024",
      desc: "Discover the best wireless headsets designed for immersive gaming experiences. From crystal-clear sound to extended battery life, find the perfect fit for your gaming sessions.",
      link: "#",
      image: Blogs1, // Replace with an appropriate image for gaming headsets
      delay:0.4
    },
    {
      id: 2,
      title: "Noise-Canceling Headphones: Revolutionizing Remote Work",
      desc: "Explore how noise-canceling headsets can transform your productivity during remote work. Say goodbye to distractions and hello to seamless conference calls.",
      link: "#",
      image: Blogs2, // Replace with an image showcasing noise-canceling headphones
      delay:0.8
    },
    {
      id: 3,
      title: "The Future of Audio: Bluetooth 5.3 and Its Impact on Headsets",
      desc: "Dive into the latest advancements in Bluetooth technology and what they mean for headset enthusiasts. Learn about improved connectivity, range, and audio quality.",
      link: "#",
      image: Blogs3, // Replace with an image of a modern Bluetooth headset
      delay:1.1
    },
    {
      id: 4,
      title: "Best Budget Headsets Under $100: Quality Meets Affordability",
      desc: "Looking for quality headsets without breaking the bank? Check out our top picks for affordable headsets that deliver excellent performance on a budget.",
      link: "#",
      image: Blogs4, // Replace with an image of budget-friendly headsets
      delay:1.3

    },
    
  ];
  
const Blogs = () => {
  return (
    <>
      <section className='bg-secondary/15 md:bg-tertiary/25 sm:bg-red-700/35 text-white'>
        <div className="container py-14 ">
            <motion.h1
           variants={FadeUp(0.2)}
            initial= 'hidden'
            whileInView={'show'}
            viewport={{once: true}}
            className='text-4xl font-semibold text-black  text-center font-poppins pb-8'>Blogs</motion.h1>
            <div   
            className='grid grid-cols-1 sm:grid-cols-2
            md:grid-cols-4 gap-6'>
                {BlogsData.map((data)=>{
                    return(
                        <UpdateFollower
                        mouseOptions={{
                            backgroundColor:'black',
                            zIndex: 999,
                            followSpeed: 1.5,
                            text:"read",
                            textFontSize: "3px",
                            scale:5,
                        }}
                        >
 <motion.div
    variants={FadeUp(data.delay)}
         initial= 'hidden'
         whileInView={'show'}
         viewport={{once: true}}
 className='flex flex-col items-center 
    justify-center gap-6 p-5 max-w-[300px] mx-auto shadow-lg rounded-md
  bg-white hover:-translate-y-2 duration-300'>
                 <img src={data.image} alt="" />
                 <div >
                    <h1 className='font-poppins text-xl text-black line-clamp-2 '>
                        {data.title}
                    </h1>
                    <p className='line-clamp-2 text-black'>
                        {data.desc}
                    </p>
                 </div>
                        </motion.div>
                        </UpdateFollower>
                       
                    )
                })}
            </div>
        </div>
    </section>
    </>
  )
}

export default Blogs