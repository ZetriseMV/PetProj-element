import React,{useState,useEffect, FC} from 'react'
import { Link } from 'react-router-dom'
import classes from './headnavigate_styles/headNav.module.css'
import { NavigateCatalog } from './Catalog_parametres/catalog'
import { InputUi } from '../Ui/input/input'
import { ButtonUi } from '../Ui/button/button'
import  logo  from '../../Utils/images/5elem.png'
import { ListCardBtn } from './btnsMain_navigate/ListCardBtn'
import  ICategoriesContent  from '../../API/interface_requests'
import { SubCatalogList } from './subCatalogDown/subCatalogList'
import close_svg from '../../Utils/svg-close.svg'
import open_svg from '../../Utils/svg-menu.svg'
import RequestsServer from '../../API/Requests'

export const HeadNavigation: FC = (): JSX.Element => {
    const [catalogOpen,setCatalogOpen] = useState<boolean>(false)
    const [navigateCategoriesData,setNavigateCategoriesData] = useState<ICategoriesContent[]>()

    useEffect(() => {
        RequestsServer.getElementsCatgeory(setNavigateCategoriesData)
    },[])
    
    return (
        <header>
            <div className={classes.headNav}>
                <div className={classes.Navigate_panel}>
                    <div className={classes.image}>
                        <Link to = '/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                    </div>
                    <div className={classes.btn_handler_catalog}>
                            <ButtonUi onClick = {() => setCatalogOpen(!catalogOpen)}>
                            { 
                                !catalogOpen ? <img src={open_svg} alt="" /> : 
                                <img src={close_svg} alt="" />
                            } 
                            Каталог
                            </ButtonUi>
                    </div>
                    <div className={classes.search_navigate}>
                            <InputUi className={classes.input_ui} placeholder ='Поиск товаров' type = 'text'>
                                <span className="material-symbols-outlined">search</span>
                            </InputUi>
                    </div>
                    <div className={classes.btn_cards}>
                        <ListCardBtn/>
                    </div>
                </div>
                {
                    !catalogOpen && <SubCatalogList/>
                }
            </div>
            { 
                catalogOpen && navigateCategoriesData !== undefined && 
                    <NavigateCatalog navigateCategoriesData = {navigateCategoriesData}/> 
            } 
        </header>
    );
};
