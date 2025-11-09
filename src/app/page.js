import ParallaxBox from "../components/ParallaxBox";
import Image from "next/image";
import Section1 from "../components/sections/section_1";
import Section2 from "../components/sections/section_2";
import Section3 from "../components/sections/section_3";
import Section4 from "../components/sections/section_4";
import Section5 from "../components/sections/section_5";
import Section6 from "../components/sections/section_6";
import Section7 from "../components/sections/section_7";
import Section8 from "../components/sections/section_8";
import Section9 from "../components/sections/section_9";
import Section10 from "../components/sections/section_10";
import Section11 from "../components/sections/section_11";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    
      <div className="snap-container">
        {/* 11 sections demo */}
        {/* import components below */}
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
        <Section10 />
        <Section11 />
      </div>
    </div>
  );
}

const demoLayers = [
  {
    speed: 0.05,
    element: (
      <Image
        src="/globe.svg"
        alt="globe"
        fill
        style={{ objectFit: "contain", opacity: 0.12 }}
        sizes="(max-width: 768px) 100vw, 320px"
        priority
      />
    ),
  },
  {
    speed: 0.18,
    element: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
        <Image src="/window.svg" alt="window" width={120} height={120} style={{ opacity: 0.9 }} />
      </div>
    ),
  },
];


