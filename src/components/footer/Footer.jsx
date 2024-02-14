import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer className='footer'>
        Redes Sociales: 
        <div className="red-social">
            <a href="https://www.facebook.com/kenia.rivas.737001?mibextid=ZbWKwL" target="_blank">
            <FaFacebook className="icon" /></a>
            <a href="https://www.instagram.com/kenyalpalacios?igsh=aHZhd3R0Y3Yybmtw" target="_blank">
            <FaInstagram className="icon" /></a>
        </div>
    </footer>
    </>
  )
}

export default Footer