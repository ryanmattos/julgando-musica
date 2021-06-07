import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import logo from '../../images/Logo.png'

import './style.scss'

export default function Navbar() {
   const location = useLocation();

   return (
      <nav>
         <Link to="/">
            <img src={logo} alt="julgandomusica.com" />
         </Link>
         <ul>
            <Link to="/" >
               <li className={location.pathname === "/" ? "active" : ""}>Episódios</li>
            </Link>
            <Link to="/about">
               <li className={location.pathname === "/about" ? "active" : ""}>Apresentadores</li>
            </Link>
         </ul>
      </nav>
   )
}