import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route,Link,NavLink } from 'react-router-dom'
import { HeadNavigation } from '../HeadNavigation/headnav'
import classes from './app.module.css'

function App() {
  return (
    <div className={classes.mainApp}>
          <HeadNavigation/>
    </div>
  )
}

export default App   
