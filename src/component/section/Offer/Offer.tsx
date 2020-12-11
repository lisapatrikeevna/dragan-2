import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Link, animateScroll as scroll} from "react-scroll";
import {Icon} from "semantic-ui-react";
import cl from './Offer.module.scss'
import {ExampleModal} from "../../../common/modalForm/exampleModal";
import {Form} from "../../../common/Form";

// type offerProps = {}
export const Offer = () => {
    let [popupId, setPopupId] = useState('1')
    let [collaps, setcollaps] = useState(false)
    //if (key === id){
    const onCansel = () => {
            setcollaps(!collaps)
    }

    return (
        <section className={cl.offer}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className={cl.offerWrap}>
                            <h1 className={cl.offerHeader}>Онлайн курсы английского языка</h1>
                            <h4 className={cl.offerDesk}><span>Silky's</span> - это ваш Американский Англиский</h4>
                            <div className={cl.offerBtnWrap}>
                                <Link to="individual"> <NavLink to={'/individual'}
                                                                className={cl.offerBtnWrapBtn}> Индивидуально </NavLink></Link>
                                <Link to="collective"> <NavLink to={'/collective'} className={cl.offerBtnWrapBtn}> Для
                                    компании </NavLink></Link>
                            </div>
                            <div className={cl.boxGray}>
                                <h2 className={cl.boxGrayTitle}>Вдохновим, для обучения</h2>
                                <ul>
                                    <li>
                                        <Icon name='arrows alternate'/><span>Inspire to learn</span>
                                        <Icon name='arrow alternate circle up outline' id='1' onClick={() => {
                                            setcollaps(!collaps)
                                            setPopupId("1")
                                        }}/>
                                        <ExampleModal collaps={collaps && popupId ===  '1'} onCansel={onCansel}
                                                      children={<iframe width="560" height="315"
                                                                        src="https://www.youtube.com/embed/Tdpq-9XYoNM"
                                                                        frameBorder="0" allow="accelerometer; autoplay;
                                                                         clipboard-write; encrypted-media; gyroscope;
                                                                         picture-in-picture" allowFullScreen>
                                                      </iframe>}/>

                                    </li>
                                    <li><Icon name='headphones'/><span>Учите английский онлайн - где и когда
                                        удобно</span>
                                    </li>
                                    <li><Icon name='user circle'/><span>Персональный куратор позаботится о
                                        вашем прогрессе</span>
                                    </li>
                                </ul>
                                <button className={cl.offerBtnWrapBtn} onClick={() => {
                                    setcollaps(!collaps)
                                    setPopupId("2")
                                }}>оставить заявку
                                </button>
                                {/*<button className={cl.offerBtnWrapBtn} onClick={onCansel} >оставить заявку</button>*/}
                                <ExampleModal onCansel={onCansel} collaps={collaps && popupId ===  '2'}
                                              children={
                                                  // <div>asdasdsds</div>

                                                  <Form btnName={'НАЧАТЬ'}
                                                              deck={'It`s YOUR talk time! Пришло ТВОЕ время говорить на английском!'}
                                                  />
                                              }
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
