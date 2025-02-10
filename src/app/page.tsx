"use client";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const scrollRef = useRef(null);
  useEffect(() => {
    let scroll: LocomotiveScroll | null = null;
    if (scrollRef.current) {
      scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);
  return (
    <div ref={scrollRef} className="overflow-hidden">
      <Header />
      <HeroSection />
    </div>
  );
}
