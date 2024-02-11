import Image from "next/image";
import ProfilePicture from '@/assets/LeftBackGround.png';
import BackgroundImage from '@/assets/RightBackGround.png';
import Introduction from "@/components/Introduction";

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left div (60% width) */}
      <div style={{ flex: '0 0 50%', position: 'relative' }}>
        {/* Profile picture as background */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `url(${ProfilePicture.src})`, backgroundSize: 'cover', backgroundPosition: 'right' }}></div>
        Yo Cont Goes here
      </div>
      
      {/* Right div (40% width) */}
      <div style={{ flex: '0 0 50%', position: 'relative' }}>
        {/* Background image */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: `url(${BackgroundImage.src})`, backgroundSize: 'cover', backgroundPosition: 'left' }}></div>
        
        {/* Content centered vertically */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Introduction/>

        </div>
      </div>
    </div>
  );
}
