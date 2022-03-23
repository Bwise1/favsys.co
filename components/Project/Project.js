import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card1 from "../../components/Cards/Card1";
import Card2 from "../../components/Cards/Card2";
import ImageCard from "../../components/Cards/ImageCard";

export default function Project(props) {
    const [clicked, setClicked] = useState(false);
    const { ref, inView } = useInView();

    const btnClicked = () => {
        setClicked(!clicked);
      }

    const animation = useAnimation();
    useEffect(() => {
        if (inView) {
            animation.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.3
                }
            });
        }
        if (!inView) {
            animation.start({ y: '+10vw' });
        }
        console.log("use effect hook, inView = ", inView);
    });

    return (
        <motion.div ref={ref} animate={animation} className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
            <div className="">
                < Card1
                    heading={props.heading}
                    text={props.text}
                    handleClick={btnClicked}
                />
            </div>
            <div className="order-first lg:col-span-2 lg:order-none ">
                < Card2 image={props.banner} />
            </div>

            {/*Temp fix for annimate presense*/}
            <AnimatePresence >
                {clicked ?
                    <>
                        < motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="order-last lg:order-none">
                            <ImageCard image={props.image1} round="rounded-bl-large" />
                        </motion.div>
                        <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                            <ImageCard image={props.image2} />
                        </motion.div>
                        <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                            <ImageCard image={props.image3} />
                        </motion.div>
                    </>
                    : null}
            </AnimatePresence>
        </motion.div>
    );
}

