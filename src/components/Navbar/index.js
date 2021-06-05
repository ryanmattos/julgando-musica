import React from 'react'

import { Link } from 'react-router-dom'

import logo from '../../images/Logo.png'

import './style.scss'

export default function Navbar() {
   return (
      <nav>
         <img src={logo} alt="julgandomusica.com" />
         <ul>
            <Link>
               <li className="active">Episódios</li>
            </Link>
            <Link>
               <li>Apresentadores</li>
            </Link>
         </ul>
      </nav>
   )
}