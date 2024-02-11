import Image from "next/image";
import ProfilePicture from '@/assets/LeftBackGround.png';
import BackgroundImage from '@/assets/RightBackGround.png';
import Introduction from "@/components/Introduction";
import Socials from "@/components/Socials";

export default function Home() {

return (
<div style={{ display: 'flex', height: '100vh',padding:'0%' }}>
  <div style={{ flex: '0 0 50%', position: 'relative' }}>
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `url(${ProfilePicture.src})`, backgroundSize: 'cover', backgroundPosition: 'right' }}>

    </div>
  </div>

  <div style={{ flex: '0 0 50%', position: 'relative' }}>

    <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `url(${BackgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'left' }}>
<div style={{paddingTop:'25vh'}}>
<Introduction/>
<Socials/>
</div>
    </div>
</div>
        

</div>
);}

