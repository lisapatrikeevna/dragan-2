import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {Link, animateScroll as scroll} from "react-scroll";
import {Icon} from "semantic-ui-react";
import cl from './Offer.module.scss'
import {ExampleModal} from "../../../common/modalForm/exampleModal"
import {Form} from "../../../common/Form"
import f1 from './../../../img/f1.png'
import f2 from './../../../img/f2.png'
import f3 from './../../../img/f3.png'

// type offerProps = {}
export const Offer = () => {
    let [popupId, setPopupId] = useState('1')
    let [collapse, setCollapse] = useState(false)
    //if (key === id){
    const Cancel = () => {
        setCollapse(!collapse)
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
                                <Link to="individual" className={cl.offerBtnWrapBtn}>
                                    {/*<NavLink to={'/individual'} className={cl.offerBtnWrapBtn}>*/}
                                       Индивидуально
                                    {/*</NavLink>*/}
                                </Link>
                                <Link to="collective" className={cl.offerBtnWrapBtn}>
                                    {/*<NavLink to={'/collective'} className={cl.offerBtnWrapBtn}>*/}
                                        Для компании
                                    {/*</NavLink>*/}
                                </Link>
                            </div>
                            <div className={cl.boxGray}>
                                <h2 className={cl.boxGrayTitle}>Вдохновим, для обучения</h2>
                                <ul>
                                    <li>
                                        <Icon name='arrows alternate'/>
                                        <span id='1' onClick={() => {
                                            setCollapse(!collapse)
                                            setPopupId("1")
                                        }}>Inspire to learn <Icon name='arrow alternate circle up outline' /></span>

                                        <ExampleModal collapse={collapse && popupId === '1'} closed={Cancel}
                                                      children={<iframe width="100%" height="auto"
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
                                    setCollapse(!collapse)
                                    setPopupId("2")
                                }}>оставить заявку
                                </button>
                                {/*<button className={cl.offerBtnWrapBtn} onClick={onCansel} >оставить заявку</button>*/}
                                <ExampleModal closed={Cancel} collapse={collapse && popupId === '2'}
                                              children={

                                                  <Form btnName={'НАЧАТЬ'}
                                                        deck={'It`s YOUR talk time! Пришло ТВОЕ время говорить на английском!'}
                                                  />
                                              }
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-sm-12">
                        <img src={f1} alt="" className={cl.f1}/>
                        <img src={f2} alt="" className={cl.f2}/>
                        <img src={f3} alt="" className={cl.f3}/>
                    </div>
                </div>
            </div>

        </section>
    )
}
