import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [menu, setMenu] = useState("home")
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
    const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
       <AiOutlineMenu size={28} onClick={openMenu} className='nav-mob-open' />
      
      <ul ref={menuRef} className="nav-menu">
         <AiOutlineClose size={28} onClick={closeMenu} className='nav-mob-close'/>
        <li>
          <AnchorLink
            className={`anchor-link ${menu === "home" ? "selected_menu" : ""}`}
            href="#home"
            onClick={() => setMenu("home")}
          >
            Home
          </AnchorLink>
        </li>

        <li>
          <AnchorLink
            className={`anchor-link ${menu === "aboutMe" ? "selected_menu" : ""}`}
            offset={50}
            href="#aboutMe"
            onClick={() => setMenu("aboutMe")}
          >
            About Me
          </AnchorLink>
        </li>
        <li><AnchorLink className={`anchor-link ${menu === "services" ? "selected_menu" : ""}`}
          offset={50}

          onClick={() => setMenu("services")} href='#services'>Services</AnchorLink></li>
        <li><AnchorLink className={`anchor-link ${menu === "work" ? "selected_menu" : ""}`}
          offset={50}

          onClick={() => setMenu("work")} href='#work'>Portfolio</AnchorLink></li>
        <li><AnchorLink className={`anchor-link ${menu === "contact" ? "selected_menu" : ""}`}
          offset={50}

          onClick={() => setMenu("contact")} href='#contact'>Contact</AnchorLink></li>

      </ul>
      <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
    </div>
  )
}

export default Navbar