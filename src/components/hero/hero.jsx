import React, { useState } from 'react'
import Headphone1 from '../../assets/headphone.png'
import Headphone2 from '../../assets/headphone2.png'
import Headphone3 from '../../assets/headphone3.png'
import { FaWhatsapp } from 'react-icons/fa';
import { UpdateFollower } from 'react-mouse-follower';
import { AnimatePresence, motion, easeInOut} from 'framer-motion'; 

const FadeUp = (delay)=> {
    return{
        hidden:{
            opacity:0,
            y:100,
            scale: 0.5,
        },
        show:{
            opacity:1,
            y:0,
            scale: 1,
            transition:{
                duration:0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit:{
            opacity:0,
            y:100,
            scale: 0.5,
            transition:{
                duration:0.7,
                ease: easeInOut,
            }
        }
    };
    
    };

    const headPhoneData = [
        {
            id: 1,
            image: Headphone1,
            title: "Headphone Wireless", 
            subtitle: 
            "Step into the future of audio with our wireless headphones, crafted for the growing demand of on-the-go professionals and audiophiles. Combining top-tier sound quality with unmatched ergonomics, these headphones set a new standard in the market.",
            price: '$100',
            modal: "Modal Brown",
            bgColor: "#8b5958",
        },
        {
            id: 2,
            image: Headphone2,
            title: "Headphone Wireless2", 
            subtitle: 
            "Engineered for excellence, these wireless headphones cater to the dynamic needs of today's consumers. Whether it's music, podcasts, or gaming, they deliver high-fidelity sound and modern aesthetics to lead the headset market.",
            price: '$100',
            modal: "Lime Green",
            bgColor: "#638153",
        },
        {
            id: 3,
            image: Headphone3,
            title: "Headphone Wireless3", 
            subtitle: 
            "Experience unrivaled audio precision with our wireless headphones, designed for discerning users in a competitive market. Stylish, durable, and packed with advanced features, they promise an extraordinary listening experience.",
            price: '$100',
            modal: "Ocean Blue",
            bgColor: "#5d818c",
        },
    ];
    

  
const Hero = () => {
  const [activeData, setActiveData] = useState(headPhoneData[0]);

  const handleActiveData = (data) => {
    setActiveData(data);
  }
    return (
    <>
    <section className='bg-brandDark text-white font-varela' id='hero'>
        <div className="container grid grid-cols-1
        md:grid-cols-2 min-h-[700px]">
                {/* Brand Info  */}

                <div className='flex flex-col justify-center
                py-14 md:py-0 xl:max-w-[500px]'>
               <div className='space-y-5 text-center md:text-left'>
                <AnimatePresence mode='wait'>
                    <UpdateFollower 
                     mouseOptions={{
                        backgroundColor: "white",
                        zIndex: 9999,
                        followSpeed: 0.5,
                        rotate: -720,
                        scale: 10,
                        mixBlendMode: "difference",
                        
                    }}
                    
                    >
                    <motion.h1 key={activeData.id}
                variants={FadeUp(0.2)}
                initial= "hidden"
                animate= "show"
                exit="exit"
                className='text-3xl lg:text-6xl
                font-bold font-varela'>{activeData.title}
                </motion.h1>
                    </UpdateFollower>

                </AnimatePresence>
               
               <AnimatePresence mode='wait'>
               <motion.p
                key={activeData.id}
                variants={FadeUp(0.1)}
                initial= "hidden"
                animate= "show"
                exit="exit"
                className='text-sm leading-loose text-white/80'>{activeData.subtitle}
                </motion.p>     
               </AnimatePresence>
              <AnimatePresence mode='wait'>
              
              <UpdateFollower
                   mouseOptions={{
                        backgroundColor: activeData.bgColor,
                        zIndex: 9999,
                        followSpeed: 0.5,
                        rotate: -720,
                        scale: 6,
                        mixBlendMode: "difference",
                        backgroundElement: (
                            <div>
                                <img src={activeData.image} alt="" />
                            </div>
                        ),
                    }}>
              <motion.button
                key={activeData.id}
                variants={FadeUp(1)}
                initial= "hidden"
                animate= "show"
            exit={{ opacity:0, scale:0.9, y:100,
                transition:{ duration: 0.2},
            }}              style={{backgroundColor:activeData.bgColor}}
                 className=' px-4 py-2 inline-block font-normal rounded-xl'>                        Buy And Listen
            </motion.button>
              </UpdateFollower>
                           </AnimatePresence>

                
                   {/* Headphone list Seperator   */}
                   <div className='flex items-center justify-center 
                   gap-4 md:justify-start !mt-24'>
                    <div className='w-20 h-[1px] bg-white'></div>
                    <p className='uppercase text-sm'>Top Headphones For You</p>
                    <div className='w-20 h-[1px] bg-white'></div>
                   </div>
                    {/* Headphone Switcher */}
                                         <div className=' grid grid-cols-3 gap-10'>
                {headPhoneData.map((item)=>{
                    return (
                        <UpdateFollower 
                        mouseOptions={{
                            backgroundColor: item.bgColor,
                            zIndex: 9999,
                            followSpeed: 0.5,
                            scale: 6,
                            text:"View Details",
                            textFontSize: "3px",
                        }}
                        >
                        <div
                        key={item.id}
                        onClick={()=> handleActiveData
                            (item)}
                        className='grid grid-cols-1 md:grid-cols-2 place-items-center
                        cursor-pointer gap-3'>
                           
                            <div>
                        <img src={item.image} alt=""
                         className='w-[200px]'/>
                        </div>
                   
                        <div className='spacy-y-2'>
                            <p className='text-base font-bold '>{item.price}</p>
                            <p className='text-xs font-normal
                            text-nowrap'>{item.modal}</p>
                        </div>
                        </div>
                        </UpdateFollower>
                    )
                })}
                    </div>
                
                                    

                    </div>
                    </div>
        {/* Hero image */}
        <div className='flex flex-col justify-end items-center'>
            <AnimatePresence>
            <motion.img
            key={activeData.id}
           initial={{ opacity:0, scale:0.9, y: 100 }}
            animate={{ opacity:1, scale:1, y: 0 }}
            transition={{ duration: 0.4, delay:0.4}}
            exit={{ opacity:0, scale:0.9, y:100,
                transition:{ duration: 0.2},
            }}
            src={activeData.image} alt=""
             className='w-[300px] md:w-[400px] xl:w-[550px] '/>
            </AnimatePresence>
            
        </div>
         {/* Whatsapp Icon  */}
         <div className='text-3xl text-white 
            fixed bottom-10 right-10 hover:rotate-[360deg] duration-500
            z-[9999] mix-blend-difference'>
            <a href="#"></a>
            <FaWhatsapp />
         </div>
        </div>
    </section>
    </>
  )
}

export default Hero