'use client'
import { useRef } from "react";
import NonVisualProjects from "@/components/NoVisualProjects";
import Contact from "@/components/Contact";
import HomePage from "@/components/Homepage";
import VisualProjects from "@/components/VisualProjects";
import Bio from "@/components/Bio";

export default function Home() {
  const contactRef = useRef(null);
  const RefFunction = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  
  return (
    <>
      <HomePage GoToFunction={RefFunction}/>
      <Bio/>
      <VisualProjects/>
      <NonVisualProjects/>
      <Contact contactRef={contactRef}/>
    </>
  );
}



