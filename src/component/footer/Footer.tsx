import React from "react";
import time from './../../img/time.png'
import logo from './../../img/logo.png'
import {Icon} from "semantic-ui-react";
import cl from './footer.module.css'
import { Link } from "react-router-dom";

export const Footer= (props:any)=>{
   return(
       <div className={cl.footer} id='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className={cl.flWrap}>
                        <img src={logo} alt="logo" className={cl.footerLogo}/>
                            <h4 className={cl.footerAsk}>До сих пор остались вопросы?</h4>
                            <h6 className={cl.footerLet}>Вы можете связаться с нами</h6>
                            <div className={cl.footerSocial}>
                                <Link to={''} className={cl.dFlex}>
                                    <span>
                                        {/*<i className="fab fa-skype"></i>*/}
                                        <Icon name='skype'/>
                                        skipe</span>
                                    <p> +38 093 567 33 62</p>
                                </Link>
                                <Link to={''} className={cl.dFlex}>
                                    <span>
                                        {/*<i className="fab fa-viber"></i>*/}
                                        <Icon name='viber'/>
                                        viber</span>
                                    <p> +38 093 567 33 62</p>
                                </Link>
                                <Link to={''} className={cl.dFlex}>
                                    <span>
                                        {/*<i className="fab fa-whatsapp-square"></i>*/}
                                        {/*<Icon name='whatsapp'/>*/}
                                        <Icon name='whatsapp square'/>
                                        watsap</span>
                                    <p> +38 093 567 33 62</p>
                                </Link>
                            </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className={cl.footerDesk}>
                                <ul>
                                    <li>
                                        <h5>
                                            Оставь заявку
                                        </h5>
                                    </li>
                                    <li>
                                        <p>
                                            -Жди звонка от менеджера
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            -Bыбирай удобную дату и время занятия
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            -Ныряй в пробный урок
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            -Подбирай нужный пакет занятий и наслаждайся учебой онлайн
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <div className={cl.footerContacts}>
                                <div className={cl.schedule}>
                                    <img src={time} alt="time" />
                                    <Icon name='calendar alternate outline'/>
                                        <div className={cl.scheduleWrap}>
                                            <div className={cl.scheduleWrapItem}>
                                                <span>Пн-Пт </span>
                                                <p>11:00-19:00</p>
                                            </div>
                                            <div className={cl.scheduleWrapItem}>
                                                <span>Сб-Вс </span>
                                                <p>11:00-18:00</p>
                                            </div>
                                        </div>
                                </div>
                                <div className={cl.mail}>
                                    {/*<i className="fas fa-envelope-open-text"></i>*/}
                                    {/*<Icon name='mail outline'/>*/}
                                    <Icon name='envelope open outline'/>
                                    <Link to="mailto:">info@iknoweng.com</Link>
                                </div>
                                <div className={cl.phone}>
                                    {/*<i className="fas fa-mobile-alt"></i>*/}
                                    {/*<Icon name="call square"/>*/}
                                    {/*<Icon name="tty"/>*/}
                                    <Icon name="mobile alternate"/>
                                    <div className={cl.phoneWrap}>
                                        <Link to={'jn'}>+38 093 567 33 62</Link>
                                        <Link to={''}>+38 093 567 33 62</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)};