import SplashScreen from "@/components/SplashScreen";
import BrowserProjects from "@/components/GraphicProjects";
import NonVisualProjects from "@/components/NoVisualProjects";
import Contact from "@/components/Contact";
import HomePage from "@/components/Homepage";
import ResonsiveImage from "@/components/responsiveSize";

export default function Home() {
  return (
    <>
    <HomePage />
    {/* <BrowserProjects /> */}
    <ResonsiveImage />
    <NonVisualProjects/>
    {/* <Contact/> */}
    {/* <ContainerTest/> */}
    
    
    </>
  );
}
