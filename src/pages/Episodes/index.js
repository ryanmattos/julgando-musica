import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Footer from '../../components/Footer'
import Episode from '../../components/Episode'

import './style.scss'

export default function Episodes() {
   const [episodes, setEpisodes] = useState({a: "fodase"});

   useEffect(() => {
      async function fetchEpisodes() {
         await axios.get(`https://api.spotify.com/v1/shows/${process.env.REACT_APP_PODCAST_ID}?market=ES`, {
            headers: {
               Authorization: `Bearer ${process.env.REACT_APP_BEARER}`
            }
         }).then((res) => {setEpisodes(res.data); console.log(res.data.episodes)})
      }

      fetchEpisodes()
      
   }, [])

   if ( episodes.episodes === null ) return

   return (
      <div id="content">
         <div id="header">
            <div className="presentation">
               <p>Reaction e crítica musical de leigos para leigos</p>
               <p>Apresentado por<br />Maria Beatriz e Matheus Diniz!</p>
            </div>
         </div>
         <div className="episodes-row">
            {episodes.episodes?.items && episodes.episodes.items.map((episode) => {
               return <Episode props={episode} />
            })}
         </div>
         <Footer />
      </div>
   )
}