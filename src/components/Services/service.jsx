import React from 'react'
import Icons1 from '../../assets/icons/obj1.png'
import Icons2 from '../../assets/icons/obj2.png'
import Icons3 from '../../assets/icons/obj3.png'
import Icons4 from '../../assets/icons/obj4.png'
import { UpdateFollower } from 'react-mouse-follower'
import { motion, easeInOut } from 'framer-motion'

export const FadeUp = (delay)=> {
  return{
      hidden:{
          opacity:0,
          y:100,
      },
      show:{
          opacity:1,
          y:0,
          scale: 1,
          transition:{
              duration:0.5,
              delay: delay,
          },
      },
      
  };
  
  };
 export const FadeLeft = (delay)=> {
  return{
      hidden:{
          opacity:0,
          x:100,
      },
      visible:{
          opacity:1,
          x:0,
          transition:{
              duration:2,
              delay: delay
          },
      },
  };
  
  };
  const ServicesData = [
    {
      id: 1,
      title: 'Security',
      links: "#",
      icon: Icons1,
      desc: 'Our headphones are designed with cutting-edge security features, ensuring a safe and private listening experience. Enjoy peace of mind in a market that prioritizes user privacy and data protection.',
      delay: 0.5
    },
    {
      id: 2,
      title: 'Guarantee',
      links: "#",
      icon: Icons2,
      desc: 'We stand by our products with a solid guarantee, offering customers confidence in their investment. In a competitive headset market, our commitment to quality and reliability sets us apart.',
      img: "http://placehold.co/50x50",
      delay: 0.8
    },
    {
      id: 3,
      title: 'Affordability',
      links: "#",
      icon: Icons3,
      desc: 'Our headphones blend premium features with affordability, ensuring great sound for all. In a growing market, we lead by making high-quality audio accessible without compromising on performance or style.',
      img: "http://placehold.co/50x50",
      delay: 1.1,
    },
];
  const Service = () => {
  return (
    <section className='bg-gray-100 font-poppins py-8' id='services'>
      <div className='container py-14 '>
        <motion.h1
         variants={FadeUp (0.2)}
         initial= "hidden"
         animate= "show"
         whileInView={'visible'}
             className='text-3xl font-bold text-center
      pb-10'>Services</motion.h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  '>
        {ServicesData.map((data) => (
          <UpdateFollower
            mouseOptions={{
              backgroundColor: "white",
              zIndex: 9999,
              followSpeed: 0.5,
              scale:5,
              rotate: 720,
              mixBlendMode: "darken",
              backgroundElement: (
                <div>
                    <img src={data.icon} alt="" />
                </div>
            ),

            }}
          >
            <motion.div 
            variants={FadeUp(data.delay)}
      initial= 'hidden'
      whileInView={'show'}
            className='flex flex-col items-center justify-center p-5 max-w-[300px]
   mx-auto shadow-lg rounded-xl bg-white'>
              <img src={data.icon} alt="" className='w-[100px] 
    mb-4'/>
              <div className='text-center space-y-2-'>
                <h1 className='text-2xl  font-extrabold md:font-bold font-varela '>{data.title}</h1>
                <p className='text-center text-sm text-black'>{data.desc}</p>
              </div>
            </motion.div>
          </UpdateFollower>
        ))}
      </div>
      </div>

    </section>
  )
}

export default Service