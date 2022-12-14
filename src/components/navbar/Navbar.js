import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaRegTimesCircle } from 'react-icons/fa'
import { BsFillHouseFill, BsChevronDown } from 'react-icons/bs'


import './Navbar.css'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Est</span>atary</h1>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='active'><a href='/'>Home</a></li>
                    <li className="parents"><a href='/'>Manage Property</a><BsChevronDown className='downarrow'/>
                    <ul className="child">
                            <li >Legal</li>
                            <li>Compant</li>
                            <li>Details</li>
                            <li>Planning</li>
                            
                        </ul>
                        </li>
                        <li className="parents"><a href='#'>Resource</a> <BsChevronDown className='downarrow'/> 
                        <ul className="child">
                             <li >Legal</li>
                            <li>Compant</li>
                            <li>Details</li>
                            <li>Planning</li>
                            
                        </ul>
                        </li>

                
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
                <button className='btn'>Sign In</button>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}

                </div>
            </div>
        </div>
    )
}

export default Navbar
