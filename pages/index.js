import Header from "../components/Header";
import Hero from "../components/Hero";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import ImageCard from "../components/Cards/ImageCard";
import Contact from "../components/Forms/Contact";
import TProfileCard from "../components/Cards/TProfileCard";
import Image from "next/image";

import photo from '../public/FFA.png';

export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
      < Header />
      < Hero />

      {/*Projects Section*/}
      <div className="container py-16 space-y-16">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="">
            < Card1 />
          </div>
          <div className="col-span-2">
            < Card2 />
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
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            < Card1 />
          </div>
          <div className="col-span-2">
            < Card2 />
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
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            < Card1 />
          </div>
          <div className="col-span-2">
            < Card2 />
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

      {/*Contact us Section*/}
      <div className="container my-12">
        <div className="text-xl font-bold">
          <h2 >In need of Service</h2>
        </div>
        <Contact />
      </div>

      {/*Testimonial Section*/}
      <div className="bg-favsent/[0.7] py-8">
        <div className="">
          <p>Testimonial</p>
        </div>
        <div className="container flex flex-row gap-10">
          <div className="basis-1/3">
            <TProfileCard />
          </div>
          <div className="basis-1/3">
            <TProfileCard />
          </div>
          <div className="basis-1/3">
            <TProfileCard />
          </div>
        </div>
      </div>

      {/*Clients Section*/}
      <div className="my-12">
        <div className="">
          <p>Clients</p>
        </div>
        <div className="container grid grid-cols-4 gap-16 max-w-screen-lg py-8">
          <div> <Image src={photo} alt="logo" /> </div>
          <div> <Image src={photo} alt="logo" /> </div>
          <div> <Image src={photo} alt="logo" /> </div>
          <div> <Image src={photo} alt="logo" /> </div>
          <div> <Image src={photo} alt="logo" /> </div>
          <div> <Image src={photo} alt="logo" /> </div>
          <div> <Image src={photo} alt="logo" /> </div>
          <div> <Image src={photo} alt="logo" /> </div>
        </div>
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
