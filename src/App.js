import React, { useEffect, useState ,PureComponent} from 'react'
import {
  BrowserRouter  as 
  Router,
  Route,Routes
} from "react-router-dom";// import {
//   BrowserRouter,
//   Routes,
//   Route ,Switch,
// } from "react-router-dom";


import Home from './Components/Home'


 const App = () => {
  return (
 
    
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />

       

      </Routes>
      
    </Router>



  )
}

export default App