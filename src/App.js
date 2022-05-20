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
import Review from './Components/Review';

 const App = () => {
  return (
 
    
    <Router>
      <Routes >
        <Route path="/" element={<Home />} />

       <Route path="/Review" element={<Review />} />

      </Routes>
      
    </Router>



  )
}

export default App