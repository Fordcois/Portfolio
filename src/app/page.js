'use client'
import { useRef } from "react";
import HomePage from "@/components/Homepage";
import Bio from "@/components/Bio";
import VisualProjects from "@/components/VisualProjects";
import NonVisualProjects from "@/components/NoVisualProjects";
import Contact from "@/components/Contact";

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



