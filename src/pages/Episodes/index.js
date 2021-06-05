import React from 'react'
import { Link } from 'react-router-dom'
import ReactTooltip from 'react-tooltip'

import thumbImg from '../../images/thumb.jpg'
import spotifyIcon from '../../images/spotify-8bit.png'
import instagramIcon from '../../images/instagram-8bit.png'

import './style.scss'

export default function Episodes() {
   return (
      <div id="content">
         <div id="header">
            <div className="presentation">
               <p>Reaction e crítica musical de leigos para leigos</p>
               <p>Apresentado por<br />Maria Beatriz e Matheus Diniz!</p>
            </div>
         </div>
         <div className="episodes-row">
            <div className="episode">
               <img src={thumbImg} alt="episode thumb" data-tip="Ver mais informações" data-for="episode-tip"/>
               <ReactTooltip effect="solid" place="left" className="tooltip" id="episode-tip"/>
               <div className="side-info">
                  <p>S01E01 - Zodíaco, Xamã</p>
                  <p>* Destaques do episódio * Mateco feat. Daft Punk; Deusa Mabi sendo fangirl de Agnes Nunes; Selo de aprovação oficial da Vaquinha + pessoas sem bunda também são gente!...</p>
                  <div className="actions">
                     <ul>
                        <Link data-tip="Ir para o Spotify" data-for="spotify-tip">
                           <li id="spotify">
                              <img src={spotifyIcon} alt="spotify" />
                              <span>Ouça no Spotify</span>
                           </li>
                        </Link>
                        <ReactTooltip id="spotify-tip" effect="solid" place="top" className="tooltip"/>
                        <Link data-tip="Ir para o Instagram" data-for="instagram-tip"> 
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
         </div>
      </div>
   )
}