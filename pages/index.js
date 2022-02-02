import Header from "../components/Header";
import Hero from "../components/Hero";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import ImageCard from "../components/Cards/ImageCard";
import Contact from "../components/Forms/Contact";
import TProfileCard from "../components/Cards/TProfileCard";


export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
      < Header />
      < Hero />
      <div className="container">
        <div>
          <div className="flex flex-row justify-between">
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-2/3">
              < Card2 />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-1/3">
              < Card1 />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between">
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-2/3">
              < Card2 />
            </div>
          </div>
          <div className="flex flex-row justify-between ">
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-1/3">
              < Card1 />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between ">
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-2/3">
              < Card2 />
            </div>
          </div>
          <div className="flex flex-row justify-between ">
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-1/3">
              < Card1 />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between max-w-7xl mx-auto">
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-2/3">
              < Card2 />
            </div>
          </div>
          <div className="flex flex-row justify-between max-w-7xl mx-auto">
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-1/3">
              < Card1 />
            </div>
            <div className="basis-1/3">
              < Card1 />
            </div>
          </div>
        </div>
        <Contact />
      </div>
      <div className="bg-favsent/[0.7] py-8">
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

      <div className="container">
        <div></div>
      </div>
      <div>
        <footer className="bg-black my-auto">
            hello
        </footer>
      </div>
    </div>
  )
}
