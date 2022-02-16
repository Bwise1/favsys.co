import React from 'react';
import { motion } from 'framer-motion';

export default function Hero(){
    return(
        <div className=" grid content-center text-center place-content-center h-99 lg:h-screen bg-favsent/[0.7]">
                <motion.div initial="hidden" animate="visible" variants={{
                    hidden: {
                        scale: .8,
                        opacity: 0
                      },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          delay: .4
                        }
                      },
                }} className='text-4xl tracking-tight font-umbaBold text-heroText sm:text-5xl md:text-6xl'>
                    <h1 className=''>we brand,</h1>
                    <h2>with you in mind.</h2>
                </motion.div>
                <div>
                    <p className='max-w-md p-4 font-umbaMedium text-center'>We team up with purpose driven businesses to build brands that thrive globally using compelling graphics and strategic contents.</p>
                </div>
        </div>
    )
}
