import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Header from "../components/Header";
import Hero from "../components/Hero";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import ImageCard from "../components/Cards/ImageCard";
import Contact from "../components/Forms/Contact";
import TProfileCard from "../components/Cards/TProfileCard";
import Clients from "../components/Client";

import display from '../public/display.png';
import sign1 from "../public/signboards/sign1.png";
import sign2 from "../public/signboards/sign2.png";
import sign3 from "../public/signboards/sign3.png";

import display2 from '../public/display2.png';
import sign4 from "../public/signboards/sign4.png";
import sign5 from "../public/signboards/sign5.png";
import sign6 from "../public/signboards/sign6.png";

import display3 from '../public/display3.png';
import sign7 from "../public/signboards/sign7.png";
import sign8 from "../public/signboards/sign8.png";
import sign9 from "../public/signboards/sign9.png";

import display4 from '../public/display4.png';
import sign10 from "../public/signboards/sign10.png";
import sign11 from "../public/signboards/sign11.png";
import sign12 from "../public/signboards/sign12.png";

import profile1 from "../public/profile1.png";
import profile2 from "../public/profile2.png";
import profile3 from "../public/profile3.png";


export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);
  const [clicked3, setClicked3] = useState(false);
  const [clicked4, setClicked4] = useState(false);

  const btnClicked = () => {
    setClicked(!clicked);
  }

  const btnClicked2 = () => {
    setClicked2(!clicked2);
  }

  const btnClicked3 = () => {
    setClicked3(!clicked3);
  }

  const btnClicked4 = () => {
    setClicked4(!clicked4);
  }

  return (
    <div className="relative bg-white overflow-hidden">
      < Header />
      < Hero />

      {/*Projects Section*/}
      <div id="projects" className="projects container py-8 space-y-8 lg:py-16">

        {/*FFA Project Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
          <div className="">
            < Card1
              heading="FFA - Funke Felix-Adejumo"
              text="Funke Felix-Adejumo is the President of the Funke Felix-Adejumo Foundation. She is a Certified Transformational Coach, Executive Coach and an Itinerant Preacher."
              handleClick={btnClicked}
            />
          </div>
          <div className="order-first lg:col-span-2 lg:order-none ">
            < Card2 image={display} />
          </div>

          {/*Temp fix for annimate presense*/}
          <AnimatePresence >
            {clicked ?
              <>
                < motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="order-last lg:order-none">
                  <ImageCard image={sign1} round="rounded-bl-large" />
                </motion.div>
                <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                  <ImageCard image={sign2} />
                </motion.div>
                <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                  <ImageCard image={sign3} />
                </motion.div>
              </>
              : null}
          </AnimatePresence>

        </div>

        {/*Isolated Paint Project Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
          <div className="">
            < Card1
              heading="Isolated Paint"
              text="Isolated Paints is a paint producing company located in South-Eastern Nigeria with the aim of providing quality paints and also encouraging nature conserving products."
              handleClick={btnClicked2}
            />
          </div>
          <div className="order-first lg:col-span-2 lg:order-none">
            < Card2 image={display2} />
          </div>
          <AnimatePresence >
            {clicked2 &&
              <>
                <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="order-last lg:order-none">
                  <ImageCard image={sign4} round="rounded-bl-large" />
                </motion.div>
                <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                  <ImageCard image={sign5} />
                </motion.div>
                <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                  <ImageCard image={sign6} />
                </motion.div>
              </>}
          </AnimatePresence >
        </div>

        {/*FAA Project Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
          <div className="">
            < Card1
              heading="FAA - Felix Aderemi Adejumo"
              text="Felix Aderemi Adejumo is the Founder and Senior Pastor of The Agape Christian Ministries Worldwide. He is an anointed preacher of the gospel, a marriage and leadership coach and a Book writer, having authored quite a number of books."
              handleClick={btnClicked3}
            />
          </div>
          <div className="order-first lg:col-span-2 lg:order-none">
            < Card2 image={display3} />
          </div>
          <AnimatePresence >
          {clicked3 &&
            <>
              <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="order-last lg:order-none">
                <ImageCard image={sign7} round="rounded-bl-large" />
              </motion.div>
              <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                <ImageCard image={sign8} />
              </motion.div>
              <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                <ImageCard image={sign9} />
              </motion.div>
            </>}
          </AnimatePresence>
        </div>

        {/*BYS Project Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2 md:">
          <div className="">
            < Card1
              heading="BYS - Beyond Your Scars"
              text="BYS is an international establishment committed to raising a young generation of kingdom driven influencers and transformational leaders who have risen above their past traumas or life conditions and serve as standard bearers in their communities and around the globe."
              handleClick={btnClicked4} />
          </div>
          <div className="order-first lg:col-span-2 lg:order-none">
            < Card2 image={display4} />
          </div>
          <AnimatePresence >
          {clicked4 &&
            <>
              <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="order-last lg:order-none">
                <ImageCard image={sign10} round="rounded-bl-large" />
              </motion.div>
              <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                <ImageCard image={sign11} />
              </motion.div>
              <motion.div animate={{ width: "100%" }} initial={{ width: "0" }} className="">
                <ImageCard image={sign12} />
              </motion.div>
            </>
          }
        </AnimatePresence>
        </div>
      </div>

      {/*Contact us Section */}
      <div id="contact" className="container my-12">
        <div className="text-xl font-umbaBold">
          <h2 >In need of our Service</h2>
        </div>
        <Contact />
      </div>

      {/*Testimonial Section*/}
      <div className="bg-favsent/[0.7] py-8">
        <div className="flex">
          <p className="title">Testimonial</p>
        </div>
        <div className="container grid grid-cols-1 gap-10 py-8 lg:grid-cols-3">
          <div className="m-auto">
            <TProfileCard image={profile1} />
          </div>
          <div className="m-auto">
            <TProfileCard image={profile2} />
          </div>
          <div className="m-auto">
            <TProfileCard image={profile3} />
          </div>
        </div>
      </div>

      {/*Clients Section*/}
      <div className="my-12">
        <div className="flex">
          <p className="title" >Clients</p>
        </div>
        <Clients />
      </div>

      {/*Footer Section*/}
      <div>
        <footer className="bg-black text-center lg:text-left text-lg font-umbaReg my-auto">
          <div className="container text-white gap-4 grid lg:grid-cols-2  py-8">
            <div className="m-auto alignitems-center">
              <p >For more enquiries:</p>
              <p> <a className='' href="mailto:info@favsys.co">info@favsys.co</a> </p>
              <p> <a className='' href="tel:+2348136631392">Call: +234 (0) 813 663 1392</a></p>
            </div>
            <div className="flex gap-6 m-auto">
              <p>Instagram</p>
              <p>Twitter</p>
              <p>Linkedin</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
