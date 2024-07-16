import { FaSquareFacebook,FaSquareXTwitter, FaSquareWhatsapp} from "react-icons/fa6";
import { FaShareAltSquare } from "react-icons/fa";
const Share = () => {
    
    const ShareFunc =() =>{
    if (navigator.share){
    navigator.share({
    Text:'Samuel Ford - Full Stack Developer',
    url:'https://www.samueljford.com/',
    title:'Samuel Ford - Full Stack Developer'})
    } else {
    navigator.clipboard.writeText('Samuel Ford - Full Stack Developer https://www.samueljford.com/')
        }
    }


    return (
        <div className="ShareContainer">
            <span className="ShareFontWhite">SHARE</span>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://www.samueljford.com/&quote=Check%20This%20guy%20out" target="_blank"><FaSquareFacebook className="ShareIcons"/></a>
        <a href ='https://twitter.com/intent/post?text=Check%20out%20this%20Awesome%20Designer&url=https%3A%2F%2Fwww.samueljford.com%2F' target="_blank"><FaSquareXTwitter className="ShareIcons"/></a>
        <a href='https://api.whatsapp.com/send?text=CheckOutThisGuyhttps://www.samueljford.com/' target="_blank"><FaSquareWhatsapp className="ShareIcons"/></a>
        <span><FaShareAltSquare className="ShareIcons" onClick={()=>ShareFunc()}/></span>
        </div>

    );};
    export default Share;