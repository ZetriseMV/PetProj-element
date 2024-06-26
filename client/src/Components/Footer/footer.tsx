import React,{ FC,useState,useEffect,MouseEventHandler } from "react";
import {Link} from 'react-router-dom'
import classes from './footer_styles/footer_style.module.css'
import { TimageArrayWeb,imagesArray } from '../../Utils/ArrayHelper/footerImages'
import { SvgElement } from '../../Utils/footerSvg'
import { InputFooter } from "./Input_footer/imput-footer";
import { ButtonUi } from "../Ui/button/button";
import payment_image from '../../Utils/images/pay_icons/icons_payment.jpg'

export const FooterComponent:FC = ():JSX.Element => {

    const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => { 
        e.preventDefault(); 
        window.open(e.currentTarget.href, '_blank'); 
    }

    return (
        <footer>
            <div className={classes.links_web}>
                <div className={classes.left_part_footer}>
                    <div className={classes.svg_textJoin}>
                        <SvgElement/>
                        <p>Мы в социальных сетях</p>
                    </div>
                    <div className={classes.web_icons_connect}>
                        {
                            imagesArray.map((item:TimageArrayWeb) =>(
                                <Link to = {item.link} className={classes.cicrle} key = {item.id} onClick={handleClick}>
                                    <img src={item.image} alt={item.src} className={classes.link_logos}/>
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.newsletter_wt2}>
                    <div className={classes.join_wt2}>
                        <p>Подписаться на новости и акции</p>
                        <InputFooter/>
                        <ButtonUi>Подписаться</ButtonUi>
                    </div>
                    <div className={classes.input_checkbox_wt2}>
                        <input type="checkbox"/>
                        <p>
                            Даю согласие на обработку моих персональных данных <br />
                            для получения рекламно-информационной рассылки.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className={classes.additionally_content}>
                <div className={classes.join_infoText}>
                    <div className={classes.text_container_add}>
                        <p>
                            Закрытое акционерное общество "ПАТИО" 
                            220036, г. Минск, пр. Дзержинского, д. 8, каб. 1302 (13 этаж). 
                            Свидетельство о государственной регистрации ЗАО «ПАТИО» выдано 
                            Мингорисполкомом на основании решения от 18.04.2001 № 491. УНП 100183195. 
                            Режим работы интернет-магазина: с 9.00 до 21.00 ежедневно. 
                        </p>
                    </div>
                    <div className={classes.text_container_add}>
                        <p>
                            Дата включения сведений об интернет-магазине 5element.by 
                            в Торговый реестр Республики Беларусь - 11.04.2018 
                            Номера городских телефонов уполномоченных по защите прав потребителей:
                            +37517-368-80-49 – администрация Московского района г. Минска; 
                            +37517-218-00-82 – главное управление торговли и услуг Мингорисполкома. 
                        </p>
                    </div>
                </div>
                <div className={classes.payment_variants}>
                    <h4>Принимаем к оплате</h4>
                    <img src={payment_image} alt="payment_categories" />
                </div>
            </div>
        </footer>
    )
}