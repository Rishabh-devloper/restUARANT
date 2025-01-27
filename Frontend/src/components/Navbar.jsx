import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {data} from '../restApi.json'
import{GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
    const[show , setShow]= useState(false)
  return (
    <nav className=''>
        <div className='logo'> Rishabh</div>
        <div className={show ?"navLinks showmenu": "navLinks"}>
            <div className="links">
                {
                    data[0].navbarLinks.map((elements)=>{
                        return(
                            <Link to={elements.link} spy={true} key={elements.id} smooth={true} duration={500} >
                                {elements.title}
                            </Link>
                        )
                    })
                }
            </div>
            <button className="menuBtn">Our Menu</button>
        </div>
        <div className="hamburger" onClick={()=>{setShow(!show)}}>
            <GiHamburgerMenu />
        </div>
    </nav>
  )
}

export default Navbar