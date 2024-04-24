import SplashScreen from "@/components/SplashScreen";
import BrowserProjects from "@/components/GraphicProjects";
import NonVisualProjects from "@/components/NoVisualProjects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
    {/* <SplashScreen /> */}
    <BrowserProjects />
    <NonVisualProjects />
    <Contact />

    </>
  );
}
