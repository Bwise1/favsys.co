import React, { useState } from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import ImageCard from "../components/Cards/ImageCard";
import ImageCard2 from "../components/Cards/ImageCard2";
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


export default function Home() {
  const [clicked, setClicked] = useState(false);
  const [clicked2, setClicked2] = useState(false);

  const btnClicked = (value) => {
    setClicked(value);
  }

  const btnClicked2 = (value) => {
    setClicked2(value);
  }

  return (
    <div className="relative bg-white overflow-hidden">
      < Header />
      < Hero />

      {/*Projects Section*/}
      <div className="container py-16 space-y-16">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="">
            < Card1 btnClicked={btnClicked} />
          </div>
          <div className=" col-span-2">
            < Card2 image = {display}/>
          </div>
          {clicked ?
            <>
              <div className="">
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
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            < Card1 btnClicked={btnClicked2} />
          </div>
          <div className="col-span-2">
            < Card2 image = {display2}/>
          </div>
          <div className="">
          <ImageCard image={sign4} />
          </div>
          <div className="">
          <ImageCard image={sign5} />
          </div>
          <div className="">
          <ImageCard image={sign6} />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            < Card1 />
          </div>
          <div className="col-span-2">
            < Card2 image = {display}/>
          </div>
          <div className="">
            < Card1 />
          </div>
          <div className="">
            < Card1 />
          </div>
          <div className="">
            < Card1 />
          </div>
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
        <div className="container grid grid-cols-3 gap-10 py-8">
          <div className="">
            <TProfileCard />
          </div>
          <div className="">
            <TProfileCard />
          </div>
          <div className="">
            <TProfileCard />
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
        <footer className="bg-black my-auto">
          <div className="container text-white grid grid-cols-2 gap-16 py-8">
            <div className="items-center">
              <p>For more enquiries:</p>
              <p>For more enquiries:</p>
              <p>For more enquiries:</p>
            </div>
            <div className="flex gap-6">
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
