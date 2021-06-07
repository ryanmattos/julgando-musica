import React from 'react'

import beatrizImg from '../../images/beatriz.jpg'
import matheusImg from '../../images/matheus.jpg'

import Footer from '../../components/Footer'

import './style.scss'

export default function About() {
   document.title += ' - Apresentadores'

   return (
      <div id="content">
         <article id="mariabeatriz">
            <div className="card">
               <div className="side-info">
                  <p>A ESPECIALISTA</p>
                  <p>MARIA BEATRIZ</p>
                  <ul>
                     <li>20</li>
                     <li>Áries</li>
                     <li>Audiovisual</li>
                     <li>Boa memória</li>
                     <li>Muitos vícios linguísticos</li>
                  </ul>
               </div>
               <span>
                  <a href="https://www.instagram.com/deusamabi/" target="_blank" rel="noreferrer">
                     @deusamabi
                  </a>
               </span>
               <img src={beatrizImg} alt="Maria Beatriz" />
            </div>
         </article>
         <article id="matheusdiniz">
            <div className="card">
               <div className="side-info">
                  <p>O INFORMANTE</p>
                  <p>MATHEUS DINIZ</p>
                  <ul>
                     <li>20</li>
                     <li>Sagitário</li>
                     <li>Marketing</li>
                     <li>Indeciso</li>
                     <li>Mil e um empregos</li>
                  </ul>
               </div>
               <span>
                  <a href="https://www.instagram.com/mthsdnz12/" target="_blank" rel="noreferrer"> 
                     @mthsdnz12
                  </a>
               </span>
               <img src={matheusImg} alt="Maria Beatriz" />
            </div>
         </article>
         <Footer />
      </div>
   )
}