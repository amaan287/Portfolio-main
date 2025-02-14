"use client";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import Projects from "./components/Projects";

export default function Home() {
  const scrollRef = useRef(null);
  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;
    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 0.5,
        lerp: 0.09,
        scrollFromAnywhere: false,
        smartphone: {
          smooth: true,
        },
        tablet: {
          smooth: true,
          breakpoint: 1024,
        },
        class: "is-revealed",
      });
    }
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef} className="overflow-hidden" data-scroll-container>
      <Header />
      <HeroSection />
      <Projects />
    </div>
  );
}
