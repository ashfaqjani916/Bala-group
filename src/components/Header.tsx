import "../css/header.css"
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";




const Header = () => {

  const [menu,setMenu] = useState(false);
  return (
    <header>
    <div className="topbar">
        <div className="logo">
            <h3>ChemSite</h3>
        </div>

        <div className="middle"></div>

       <nav className={menu ? "open":""}>
       
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Research">Research</NavLink>
        <NavLink to="/Publications">Research Output</NavLink>
        <NavLink to="/Team">Team</NavLink>
        <NavLink to="/Links">Useful Links</NavLink>
        <button>Contact us</button>
        
    </nav>
    <div className="burger">
      <CiMenuFries onClick={()=>{setMenu(!menu);}} style={{backgroundColor:"transparent",color:"aliceblue",fontSize:"50px",fontWeight:"bolder"}}/>
        </div>
    </div>
</header>

  )
}

export default Header