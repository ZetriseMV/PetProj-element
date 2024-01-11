import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeadNavigation } from '../HeadNavigation/headnav'
import { MainComponent } from '../MainComponentWProducts/MainComponent'
import  subCatalogArray,{ IsubCatalog } from '../../Utils/ArrayHelper/subCatalogArray'
import { CategoriesComponent } from '../CategoriesComponent/category-component'
import classes from './app.module.css'
import { LoginAreaUser } from '../Login_user/login_user'

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
                <Route path = '/personal_area-login' element={<LoginAreaUser/>}></Route>
              </Routes>
          </Router>
    </div>
  )
}

export default App   
