import React from 'react';
import { motion } from 'framer-motion';
import {fadeIn} from '../../animations/variants.ts';

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
                          delay: .3
                        }
                      },
                }} 
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    }
                }}
                className='text-4xl tracking-tight font-umbaBold text-heroText sm:text-5xl md:text-6xl'>
                    <h1 className=''>we brand,</h1>
                    <h2>with you in mind.</h2>
                </motion.div>
                <div>
                    <motion.p variants={fadeIn()} initial="initial" animate="animate" whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: .2
                    }}} className='transform transition duration-500 hover:scale-125 max-w-md p-4 font-umbaMedium text-center'>We team up with purpose driven businesses to build brands that thrive globally using compelling graphics and strategic contents.</motion.p>
                </div>
        </div>
    )
}
