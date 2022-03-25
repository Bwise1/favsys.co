import React from 'react';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Contact from "../components/Forms/Contact";
import Clients from "../components/Client";
import Projects from "../components/Project/Projects";

export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
        <Header />
        <Hero />
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
            <p>Content Creation</p>
            <p>Motion and Graphic Design</p>
            <p>Copy Writing</p>
          </div>
        </div>
      </div>

      {/*Clients Section*/}
      <div id="clients" className="my-12">
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
