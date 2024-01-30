import { FaLinkedin,FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import "../css/footer.css"

import { Link } from "react-router-dom"
const mystyle={
  color:"ivory",
  fontSize:"2rem",
  backgroundColor:"transparent",
  marginRight:"1.2rem"
}
const Footer = () => {
  return (
    <div className="foot">

        <div className="footerItems">
        <Link to="/">Home</Link>
        <Link to="/Research">Research</Link>
        <Link to="/Publications">Research Output</Link>
        <Link to="/Team">Team</Link>
        <Link to="/Links">Useful Links</Link>
        </div>

        <div className="sociallinkuu">
          <a href="https://www.linkedin.com/in/balaji-babu-b4414772/"> <FaLinkedin style={mystyle}/></a>
        <a href="https://twitter.com/home"><FaTwitter  style={mystyle}/></a>
        <a href="https://www.instagram.com/balajibabu10/"><FaInstagram style={mystyle} /></a>
        
        </div>

        <div className="copyright">
        <p>© 2024 All rights reserved.     Developed by <a href="https://www.linkedin.com/in/ashfaqjani/">Ashfaq Jani</a></p>
        </div>
       
        
    </div>
  )
}

export default Footer