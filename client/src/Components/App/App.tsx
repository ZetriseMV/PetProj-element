import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HeadNavigation } from '../HeadNavigation/headnav'
import { MainComponent } from '../MainComponentWProducts/MainComponent'
import  subCatalogArray,{ IsubCatalog,DeepNavCategoriesArray } from '../../Utils/ArrayHelper/subCatalogArray'
import { CategoriesComponent } from '../CategoriesComponent/category-component'
import { LoginAreaUser } from '../Login_user/login_user'
import { FooterComponent } from '../Footer/footer'
import { LeaderProducts } from '../CategoriesComponent/DemandCategoriesComponents/leaders/leaderProducts';
import { ArrayBrands,Ibrands } from '../../Utils/ArrayHelper/brandsArray';
import { BrandComponent } from '../MainComponentWProducts/Brands/brandComponent';
import { renderBrandCategoryRoutes,renderCategoryProduct } from './RenderProducts/renderProducts'

export const App = () => {  
  return (
    <>
          <Router>
              <HeadNavigation/>
              <Routes>
                <Route path = '/' element={<MainComponent/>}/>
                {
                  subCatalogArray.slice(1,subCatalogArray.length).map((category:IsubCatalog) => (
                    <Route key = {category._id} path={category.link} element={<CategoriesComponent/>}/>
                  ))
                }
                { 
                  DeepNavCategoriesArray.map((item) => (
                    <Route key = {item._id} path={item.link} element={<CategoriesComponent/>}/>
                  ))
                }

                { renderBrandCategoryRoutes() }
                { renderCategoryProduct() }
                
                <Route path = '/personal_area-login' element={<LoginAreaUser/>}></Route>
                <Route path='/top-sellers' element={<LeaderProducts/>}></Route>
              </Routes>
              <FooterComponent/>
          </Router>
    </>
  )
}

export default App   
