import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Header from "../components/Header";
import Hero from "../components/Hero";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import ImageCard from "../components/Cards/ImageCard";
import Contact from "../components/Forms/Contact";
import TProfileCard from "../components/Cards/TProfileCard";
import Clients from "../components/Client";
import Projects from "../components/Project/Projects";

// import display from '../public/display.png';
// import sign1 from "../public/signboards/sign1.png";
// import sign2 from "../public/signboards/sign2.png";
// import sign3 from "../public/signboards/sign3.png";

// import display2 from '../public/display2.png';
// import sign4 from "../public/signboards/sign4.png";
// import sign5 from "../public/signboards/sign5.png";
// import sign6 from "../public/signboards/sign6.png";

// import display3 from '../public/display3.png';
// import sign7 from "../public/signboards/sign7.png";
// import sign8 from "../public/signboards/sign8.png";
// import sign9 from "../public/signboards/sign9.png";

// import display4 from '../public/display4.png';
// import sign10 from "../public/signboards/sign10.png";
// import sign11 from "../public/signboards/sign11.png";
// import sign12 from "../public/signboards/sign12.png";

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

  const {ref, inView} = useInView();

  const animation = useAnimation();
  useEffect(() => {
    if(inView){
      animation.start({
        y: 0,
        transition: {
          type: 'spring', duration: 1, bounce: 0.3
        }
      });
    }
    if(!inView){
      animation.start({y: '+10vw'});
    }
    console.log("use effect hook, inView = ",inView);
  });

  return (
    <div className="relative bg-white overflow-hidden">
      < Header />
      < Hero />

      {/*Projects Section*/}
      <div id="projects" className="projects container py-8 space-y-8 lg:py-16">
        <Projects />

      </div>

      {/*Contact us Section */}
      <div id="contact" className="container my-12">
        <div className="text-xl font-umbaBold">
          <h2 >In need of our Service</h2>
        </div>
        <Contact />
      </div>

      {/*Testimonial Section*/}
      <div id="services" className="bg-favsent/[0.7] py-8">
        <div className="flex">
          <p className="title">OUR Services</p>
        </div>
        <div className="container grid grid-cols-1 gap-10 py-8 text-center font-umbaReg lg:grid-cols-3">
          <div className="m-auto ">
            <p>Brand Identity</p>
            <p>Brand Strategy</p>
            <p>Brand Naming</p>
            <p>Brand Guidelines</p>
            <p>Event Branding</p>
          </div>
          <div className="m-auto">
            <p>UI/UX (Product Design)</p>
            <p>Web Development</p>
            <p>Campaign Ads</p>
            <p>Publications & Editorial Design</p>
            <p>Social Media Design</p>
          </div>
          <div className="m-auto">
            <p>Design Printing & Production</p>
            <p>Brand Management (Retainer)</p>
            <p>Content</p>
            <p>Motion and Graphic Design</p>
            <p>Copy Writing</p>
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
        <footer className="bg-black text-sm text-center lg:text-left font-umbaReg my-auto">
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
            <div className='m-auto alignitems-center lg:col-span-2'>
              <p> <a className='text-sm' >&copy;favsys, 2022 </a></p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
