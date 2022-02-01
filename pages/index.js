import Header from "../components/Header";
import Hero from "../components/Hero";
import Card1 from "../components/Cards/Card1";
import Card2 from "../components/Cards/Card2";
import Contact from "../components/Forms/Contact";

export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
      < Header />
      < Hero />
      <div className="max-w-7xl mx-auto">
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
    </div>
  )
}
