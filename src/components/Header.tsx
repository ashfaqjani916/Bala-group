import "../css/header.css"
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header>
    <div className="nav">
        <div className="logo">
            <h3>ChemSite</h3>
        </div>
        <div className="middle">

        </div>
       <div className="menu">
        <Link to="index.html">Home</Link>
        <Link to="research.html">Research</Link>
        <Link to="publications.html">Research Output</Link>
        <Link to="team.html">Team</Link>
        <Link to="links.html">Useful Links</Link>
        <button>Contact us</button>
    </div>
    </div>
</header>

  )
}

export default Header