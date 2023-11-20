import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeadNavigation } from '../HeadNavigation/headnav'
import { MainComponent } from '../MainComponentWProducts/MainComponent'
import classes from './app.module.css'

function App() {
  return (
    <div className={classes.mainApp}>
          <Router>
              <HeadNavigation/>
              <Routes>
                <Route path = '/' element={<MainComponent/>}/>
              </Routes>
          </Router>
    </div>
  )
}

export default App   
