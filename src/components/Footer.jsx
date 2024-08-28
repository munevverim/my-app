import './Footer.css';
import instagram from '../assets/icons/instagram.png'
import twiter from '../assets/icons/x.png'
import linkedin from '../assets/icons/linkedin.png'; // linkedin icon was using instagram image
import pinterest from '../assets/icons/pinterest.png';
import youtube from '../assets/icons/youtube.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <p>Quick Vision Studios {new Date().getFullYear()}. All Rights Reserved.</p>
            </div>
            <div className="footer-center">
                <img src={twiter} alt="twitter" />
                <img src={pinterest} alt="pinterest" />
                <img src={instagram} alt="instagram" />
                <img src={linkedin} alt="linkedin" />
                <img src={youtube} alt="youtube" />
            </div>
            <div className="footer-right">
                <a href="#">Terms of Use</a>
                <a href="#">Privacy Policy</a>
                <a href="#">About Us</a>
                <a href="#">Pricing</a>
            </div>
        </div>
    );
};



export default Footer;