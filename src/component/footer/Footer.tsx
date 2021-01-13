import React from "react";
import time from './../../img/time.png'
import logo from './../../img/logo.png'
import {Icon} from "semantic-ui-react";

export const Footer= (props:any)=>{
   return(
       <div className="footer" id='footer'>
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-12">
                    <div className="fl-wrepp m-auto">
                        <img src={logo} alt="logo" className="footer-logo"/>
                            <h4 className="footer-ask">До сих пор остались вопросы?</h4>
                            <h6 className="footer-let">Вы можете связаться с нами</h6>
                            <div className="footer-sotial">
                                <a href="#" className="d-flex">
                                    <span>
                                        {/*<i className="fab fa-skype"></i>*/}
                                        <Icon name='skype'/>
                                        skipe</span>
                                    <p> +38 093 567 33 62</p>
                                </a>
                                <a href="#" className="d-flex">
                                    <span>
                                        {/*<i className="fab fa-viber"></i>*/}
                                        <Icon name='viber'/>
                                        viber</span>
                                    <p> +38 093 567 33 62</p>
                                </a>
                                <a href="#" className="d-flex">
                                    <span>
                                        {/*<i className="fab fa-whatsapp-square"></i>*/}
                                        {/*<Icon name='whatsapp'/>*/}
                                        <Icon name='whatsapp square'/>
                                        watsap</span>
                                    <p> +38 093 567 33 62</p>
                                </a>
                            </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            <div className="footer-desk">
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
                            <div className="footer-contacts ml-auto">
                                <div className="schedule d-flex">
                                    <img src={time} alt="time" />
                                    <Icon name='calendar alternate outline'/>
                                        <div className="schedule-wrap">
                                            <div className="schedule-wrap__item">
                                                <span>Пн-Пт </span>
                                                <p>11:00-19:00</p>
                                            </div>
                                            <div className="schedule-wrap__item">
                                                <span>Сб-Вс </span>
                                                <p>11:00-18:00</p>
                                            </div>
                                        </div>
                                </div>
                                <div className="mail d-flex">
                                    {/*<i className="fas fa-envelope-open-text"></i>*/}
                                    {/*<Icon name='mail outline'/>*/}
                                    <Icon name='envelope open outline'/>
                                    <a href="mailto:">info@iknoweng.com</a>
                                </div>
                                <div className="phone d-flex">
                                    {/*<i className="fas fa-mobile-alt"></i>*/}
                                    {/*<Icon name="call square"/>*/}
                                    {/*<Icon name="tty"/>*/}
                                    <Icon name="mobile alternate"/>
                                    <div className="phone__wrap d-flex">
                                        <a href="">+38 093 567 33 62</a>
                                        <a href="">+38 093 567 33 62</a>
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