import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeadNavigation } from '../HeadNavigation/headnav'
import { MainComponent } from '../MainComponentWProducts/MainComponent'
import  subCatalogArray,{ IsubCatalog } from '../../Utils/ArrayHelper/subCatalogArray'
import { CategoriesComponent } from '../CategoriesComponent/category-component'
import classes from './app.module.css'

function App() {
  return (
    <div className={classes.mainApp}>
          <Router>
              <HeadNavigation/>
              <Routes>
                <Route path = '/' element={<MainComponent/>}/>
                {
                  subCatalogArray.map((category:IsubCatalog) => (
                    <Route key = {category._id} path={category.link} element={<CategoriesComponent/>}/>
                  ))
                }
              </Routes>
          </Router>
    </div>
  )
}

export default App   
