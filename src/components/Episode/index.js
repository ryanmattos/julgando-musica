import React from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import spotifyIcon from '../../images/spotify-8bit.png'
import instagramIcon from '../../images/instagram-8bit.png'

import './style.scss'

export default function Episode({ props }){
   console.log(props)
   return (
      <div className="episode">
         <img src={props.images[0].url} alt="episode thumb" data-tip="Ver mais informações" data-for="episode-tip"/>
         <ReactTooltip effect="solid" place="left" className="tooltip" id="episode-tip"/>
         <div className="side-info">
            <p>{props.name}</p>
            <p>{props.description}</p>
            <div className="actions">
               <ul>
                  <a href={props.external_urls.spotify} target="_blank" rel="noreferrer" data-tip="Ir para o Spotify" data-for="spotify-tip">
                     <li id="spotify">
                        <img src={spotifyIcon} alt="spotify" />
                        <span>Ouça no Spotify</span>
                     </li>
                  </a>
                  <ReactTooltip id="spotify-tip" effect="solid" place="top" className="tooltip"/>
                  <Link to="" data-tip="Ir para o Instagram" data-for="instagram-tip"> 
                     <li id="instagram">
                        <img src={instagramIcon} alt="instagram" />
                        <span>Post no Instagram</span>
                     </li>
                  </Link>
                  <ReactTooltip id="instagram-tip" effect="solid" place="top" className="tooltip"/>
               </ul>
            </div>
         </div>
      </div>
   )
}