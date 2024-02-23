import ProfilePicture from '@/assets/LeftBackGround.png';
import BackgroundImage from '@/assets/RightBackGround.png';
import Glitch from "@/components/Glitch";
import Socials from "@/components/Socials";
import Projects from "@/components/Projects";
import Screen from "@/components/screen";
import { FaArrowDown } from "react-icons/fa";

export default function Home() {

return (
  <>
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ flex: '0 0 50%', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `url(${ProfilePicture.src})`, backgroundSize: 'cover', backgroundPosition: 'right' }}>
      </div>
    </div>
  <div style={{ flex: '0 0 50%', position: 'relative' }}>
  <div style={{ paddingRight: '1.5%', position: 'relative', width: '100%', height: '100vh', background: `url(${BackgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'left', borderRadius: '0% 0% 0% 0%', display: 'flex', flexDirection: 'column' }}>
  <div style={{ flex: '0', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingTop: '20%' }}>
    <Glitch Text='SAMUEL FORD' />
    <span className="subheading" style={{ marginTop: '10px' }}>SOFTWARE DEVELOPER</span>
    <div style={{ marginTop: '10px' }}>
      <Socials />
    </div>
  </div>
  <div style={{ position: 'absolute', bottom: 0, right: 0, padding: '10px' }}>
      <FaArrowDown className="ArrowIcon" />
    </div>
</div>

  </div>
      
</div>

<div>
 <Projects/>
</div>



</>
);}

