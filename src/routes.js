import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar'

import Episodes from './pages/Episodes'
import About from './pages/About'

export default function Routes() {
   return (
      <BrowserRouter>
         <Navbar />
         <Switch> 
            <Route path="/" exact component={Episodes} />
            <Route path="/about" component={About} />
         </Switch>
      </BrowserRouter>
   )
}