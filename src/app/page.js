import SplashScreen from "@/components/SplashScreen";
import BrowserProjects from "@/components/GraphicProjects";
import NonVisualProjects from "@/components/NoVisualProjects";
import Contact from "@/components/Contact";
import ContainerTest from "@/components/container";

export default function Home() {
  return (
    <>
 {/* <ContainerTest /> */}
    <SplashScreen />
    <BrowserProjects />
    <NonVisualProjects /> 
    <Contact />

    </>
  );
}
