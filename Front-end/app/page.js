import Image from "next/image";
import Header from "./components/Header";
import CardsApp from "./components/CardsApp";
import SiwpeButtons from "./components/SiwpeButtons";

export default function Home() {
  return (
  <div>
    {/* header */}
    <Header/>

    {/* cards */}
    <CardsApp/>

    {/* swipebuttons */}
    <SiwpeButtons/>
  </div>
  );
}
