import React, { useState } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import ImageCard from "../components/Cards/ImageCard";
import Contact from "../components/Forms/Contact";
import TProfileCard from "../components/Cards/TProfileCard";
import Clients from "../components/Client"
import Image from "next/image";

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
      <div className="container py-8 space-y-8 lg:py-16">

        {/*FFA Project Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
          <div className="">
            < Card1 handleClick={btnClicked} />
          </div>
          <div className="order-first lg:col-span-2 lg:order-none ">
            < Card2 image={display} />
          </div>
          {clicked ?
            <>
              <div className="order-last lg:order-none">
                <ImageCard image={sign1} round="rounded-bl-large" />
              </div>
              <div className="">
                <ImageCard image={sign2} />
              </div>
              <div className="">
                <ImageCard image={sign3} />
              </div>
            </>
            : null}
        </div>

        {/*Isolated Paint Project Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
          <div className="">
            < Card1 handleClick={btnClicked2} />
          </div>
          <div className="order-first lg:col-span-2 lg:order-none">
            < Card2 image={display2} />
          </div>
          {clicked2 &&
            <>
              <div className="order-last lg:order-none">
                <ImageCard image={sign4} round="rounded-bl-large" />
              </div>
              <div className="">
                <ImageCard image={sign5} />
              </div>
              <div className="">
                <ImageCard image={sign6} />
              </div>
            </>}

        </div>

        {/*FAA Project Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
          <div className="">
            < Card1 handleClick={btnClicked3} />
          </div>
          <div className="order-first lg:col-span-2 lg:order-none">
            < Card2 image={display3} />
          </div>
          {clicked3 &&
            <>
              <div className="order-last lg:order-none">
                <ImageCard image={sign7} round="rounded-bl-large" />
              </div>
              <div className="">
                <ImageCard image={sign8} />
              </div>
              <div className="">
                <ImageCard image={sign9} />
              </div>
            </>}
        </div>

        {/*BYS Project Section*/}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-2">
          <div className="">
            < Card1 handleClick={btnClicked4} />
          </div>
          <div className="order-first lg:col-span-2 lg:order-none">
            < Card2 image={display4} />
          </div>
          {clicked4 &&
            <>
              <div className="order-last lg:order-none">
                <ImageCard image={sign10} round="rounded-bl-large" />
              </div>
              <div className="">
                <ImageCard image={sign11} />
              </div>
              <div className="">
                <ImageCard image={sign12} />
              </div>
            </>
          }

        </div>
      </div>


      {/*test
      <div className="container grid grid-cols-2 gap-4">
        <div className="bg-blue-500">ze an element’s content to cover its container cover its containecover its containecover its containecover its containe using this class.</div>
        <div className="bg-blue-500 "><Image src={photo} alt="logo" layout="responsive" className=""/></div>
        <div className="bg-blue-500 "></div>
        <div className="bg-blue-500 "></div>
      </div> */}
      {/*Contact us Section */}
      <div className="container my-12">
        <div className="text-xl font-bold">
          <h2 >In need of Service</h2>
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
        <footer className="bg-black font-umbaLight my-auto">
          <div className="container text-white grid grid-cols-2 gap-16 py-8">
            <div className="m-auto alignitems-center">
              <p>For more enquiries:</p>
              <p>info@favsys.co</p>
              <p>Call: +234 (0) 813 663 1392</p>
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
