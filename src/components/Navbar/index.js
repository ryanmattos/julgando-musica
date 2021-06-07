import React, { useState } from 'react'
import { Link, useLocation, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import logo from '../../images/Logo.png'

import './style.scss'

export default function Navbar() {
   const location = useLocation();
   const navigate = useHistory();

   function toggleMenu() {
      let content = document.querySelector("#content").style
      console.log(document.querySelector(".hidden-menu").classList.contains("active"))
      content.filter = content.filter === "" ? "blur(8px)" : "" 
      document.querySelector(".hidden-menu").classList.contains("active") ?
         document.querySelector(".hidden-menu").classList.remove("active") :
         document.querySelector(".hidden-menu").classList.add("active")
   }

   function handleNavigateToEpisodes() {
      document.querySelector(".hidden-menu").classList.remove("active")
      navigate.push('/')
   }

   function handleNavigateToAbout() {
      document.querySelector(".hidden-menu").classList.remove("active")
      navigate.push('/about')
   }

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
         <div className={`hidden-menu`}>
            <span>
               <FontAwesomeIcon icon={faBars}  onClick={() => toggleMenu()}/>
            </span>
            <div className="menu">
               <ul>
                     <li 
                        className={location.pathname === "/" ? "active" : ""}
                        onClick={handleNavigateToEpisodes}
                     >Episódios</li>
                     <li
                        className={location.pathname === "/about" ? "active" : ""}
                        onClick={handleNavigateToAbout}
                     >Apresentadores</li>
               </ul>
            </div>
         </div>
      </nav>
   )
}