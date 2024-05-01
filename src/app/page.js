import SplashScreen from "@/components/SplashScreen";
import BrowserProjects from "@/components/GraphicProjects";
import NonVisualProjects from "@/components/NoVisualProjects";
import Contact from "@/components/Contact";
import ContainerTest from "@/components/container";
import HomePage from "@/components/Homepage";

export default function Home() {
  return (
    <>
    <HomePage />
    <BrowserProjects />
    <NonVisualProjects/>
    <Contact/>
    </>
  );
}
