import React,{useState,useEffect, FC} from 'react'
import { Link } from 'react-router-dom'
import classes from './stylesNavigate/headnavigate_styles/headNav.module.css'
import { NavigateCatalog } from './Catalog_parametres/catalog'
import { InputUi } from '../Ui/input/input'
import { ButtonUi } from '../Ui/button/button'
import  logo  from '../../Utils/images/5elem.png'
import { ListCardBtn } from './btnsMain_navigate/ListCardBtn'

export const HeadNavigation: FC = (): JSX.Element => {
    const [catalogOpen,setCatalogOpen] = useState<boolean>(false)

    return (
        <div>
            <div className={classes.headNav}>
                <div className={classes.Navigate_panel}>
                    <div className={classes.image}>
                        <Link to = '/'>
                            <img src={logo} alt='logo'/>
                        </Link>
                    </div>
                    <div className={classes.btn_handler_catalog}>
                            <ButtonUi className={classes.btn_catalog} onClick = {() => setCatalogOpen(!catalogOpen)}>
                            { 
                                !catalogOpen ? <span className="material-icons-outlined">menu</span> : 
                                <span className="material-icons-outlined">close</span> 
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
            </div>
            { catalogOpen && <NavigateCatalog/> } 
        </div>
    );
};
