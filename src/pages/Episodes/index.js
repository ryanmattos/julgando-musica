import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Footer from '../../components/Footer'
import Episode from '../../components/Episode'

import './style.scss'

export default function Episodes() {
   const [episodes, setEpisodes] = useState({});
   const [token, setToken] = useState(localStorage.getItem('token'));

   useEffect(() => {
      async function getToken() {
         const params = new URLSearchParams()
         params.append('grant_type', 'client_credentials')

         await axios.post('https://accounts.spotify.com/api/token', params, {
            headers: {
               'Content-Type': 'application/x-www-form-urlencoded',
               'Authorization': `Basic ${process.env.REACT_APP_CREDENTIALS}`
               
            }
         }).then(res => {
            console.log(res.data.access_token)
            fetchEpisodes(res.data.access_token)
            localStorage.setItem('token', res.data.access_token)
            setToken(res.data.access_token)
         })
      }

      async function fetchEpisodes(token) {
         console.log(token)
         await axios.get(`https://api.spotify.com/v1/shows/${process.env.REACT_APP_PODCAST_ID}?market=ES`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         }).then((res) => {setEpisodes(res.data); console.log(res)})
         .catch((err) => getToken())
      }

      if (token === null) getToken()
      fetchEpisodes(token)
      
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