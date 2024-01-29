
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="foot">

        <div className="footerItems">
        <Link to="/Research">Research</Link>
        <Link to="/Publications">Research Output</Link>
        <Link to="/Team">Team</Link>
        <Link to="/Links">Useful Links</Link>
        </div>
        
    </div>
  )
}

export default Footer