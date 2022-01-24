import Header from "../components/Header";
import Hero from "../components/Hero";
import Card1 from "../components/Hero/Cards/Card1";

export default function Home() {
  return (
    <div className="relative bg-white overflow-hidden">
      < Header />
      < Hero />
      <div className="flex flex-row">
        <div className="basis-1/3">
          < Card1 />
        </div>
        <div className="basis-2/3">
          < Card1 />
        </div>

      </div>

    </div>
  )
}
