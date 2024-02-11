import Introduction from "@/components/Introduction";
import NavBar from "@/components/navbar";
import Image from "next/image";
import ProfilePicture from '@/assets/sfprofile.jpg';

export default function Home() {
  return (
    <>
      <div style={{ display: 'flex' }}>
      <div style={{ width: '40%', backgroundColor: 'red', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
  
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
        <Image src={ProfilePicture} layout="fill" objectFit="cover" alt="Samuel Ford - Full Stack Developer" />
      </div>
</div>
        <div className='IntroRight' style={{ width: '60%', backgroundColor: '#fbb7b5', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{backgroundColor:'transparent', height:'100%'}}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
              <Introduction/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
