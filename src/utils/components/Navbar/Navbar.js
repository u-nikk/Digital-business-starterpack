"use client"
import React, { useState } from 'react'
import './Navbar.css'
import { BiMenuAltRight } from 'react-icons/bi'

const Navbar = () => {
    const[mobileMenuOpened,setMobileMenuOpened] = useState(false)
    return (
        <div className="n-wrapper">
            {/*------Desktop version-------*/}
            <div className="container">
                <div className="n-container">
                    {/*left side*/}
                    <div className="n-logo">
                        <span>Contentic Media</span>
                    </div>
                    {/*right side*/}
                    <div className="n-right">
                        <div className="n-menu">
                            <span>Home</span>
                            <span>Services</span>
                            {/*<span>Contact</span>*/}
                            <span>About</span>
                            <span>Blogs</span>
                        </div>
                        <div className="button">
                            Contact Us
                        </div>
                    </div>

                </div>
            </div>
            {/*------Mobile version-------*/}
            <div className="nm-container">
                {/*------logo-----*/}
    <span>Contentic Media</span>

     {/*-----menu icon------*/}
                <BiMenuAltRight size={30} onClick={()=>setMobileMenuOpened(true)}/>
            </div>
            {/*-----mobile menu-----*/}
            <div className="nm-menu"style={{transform:mobileMenuOpened && "translateX(0%)"}}>
                <span>Home</span>
                <span>Services</span>
                <span>About</span>
                <span>Blogs</span>
                <div className="mbutton">Contact Us</div>
            </div>
        </div>
    )
}

export default Navbar