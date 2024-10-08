

import Image from "next/image";
import Link from "next/link";

import CSNavbar from "@/components/ui/navbar";
import Banner from "@/components/ui/banner";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Footer from "@/components/ui/footer";




export default function Home() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));


  return (
    <div>
      {/* <Landing/> */}
      <Banner />
      <CSNavbar />

      <div className="w-full h-full py-20 pt-[250px]">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-400  font-sans">
          Get to know our cricket club.
        </h2>
        <Carousel items={cards} />
      </div>
      {/* <Grid /> */}
      <Footer />
    </div>
  );
}



const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Established",
    title: "October 2024",
    src: "https://images.unsplash.com/photo-1512719994953-eabf50895df7?q=80&w=2829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Mission",
    title: "Increase cricket popularity in FSU and the US", 
    src: "https://images.unsplash.com/photo-1624295415119-4811300f901f?q=80&w=2926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Upcoming event",
    title: "FSU Premier League",
    src: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];