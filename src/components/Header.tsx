import "../css/header.css"
import { NavLink } from "react-router-dom"
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Contact from "./Contact";
import { Link } from "react-router-dom";


const Header = () => {


  const [menu,setMenu] = useState(false);
  const [contact,setContact] = useState<boolean>(false);
    

  return (
    <header>
    <div className="topbar">
      <Link to="/"><div className="logo ml-6 mt-1">
          <img src={'./logo.png'} style={{height:"60px",width:"120px"}}/>
        </div>
</Link>
        
        <div className="middle"></div>

       <nav className={menu ? "open":""}>
       
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Research">Research</NavLink>
        <NavLink to="/Publications">Research Output</NavLink>
        <NavLink to="/Team">Team</NavLink>
        <NavLink to="/Links">Useful Links</NavLink>
        <button onClick={()=>{
          setContact(true);
        }}>Contact us</button>
        
    </nav>

    <div className="burger">
      <CiMenuFries onClick={()=>{setMenu(!menu);}} style={{backgroundColor:"transparent",color:"#055970",fontSize:"50px",fontWeight:"bolder"}}/>
        </div>

        {contact && <Contact contactFun={setContact}/>}
    </div>
</header>

  )
}

export default Header