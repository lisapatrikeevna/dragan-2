// import React from "react";
import React, {useEffect, useState} from 'react'
import {Dropdown, Icon, Menu} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import logo from './../../img/logo.png'
import {ExampleModal} from "../../common/modalForm/exampleModal";
import {Login} from "../login/login";
import {Link} from 'react-scroll/modules';
import './header.css';
import {Registration} from "../Registration/registration";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../1bll/store";
import {isAuthTC} from "../../1bll/loginReduser";

// TODO: Update <Search> usage after its will be implemented
type propsType = {
    userStatus: boolean
}
const MenuExampleAttached = (props: propsType) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(isAuthTC())
    }, [dispatch])
    let userStatus = useSelector<AppRootStateType, boolean>(state => state.login.status)
    let initialized = useSelector<AppRootStateType, boolean>(state => state.login.isInitialized)
    // alert(userStatus)
    let [popupId, setPopupId] = useState('')
    let [collapse, setCollapse] = useState(false)
    const regOnClick = () => {
        setCollapse(!collapse)
        setPopupId("4")
    }
    const logOnClick = () => {
        setCollapse(!collapse)
        setPopupId("3")
    }
    const cancel = () => {
        setCollapse(!collapse)
    }
    return <div className="header">
        <Menu attached='top'>
            <NavLink to={'/mainPage'}><img src={logo} alt="logo"
                                           className="logo"/></NavLink> {/*style={{width: '90px'}}*/}
            <Dropdown item icon='bars' simple>
                <Dropdown.Menu>
                    {userStatus &&
                    <Dropdown.Item>
                        <Icon name='dropdown'/>
                        <span className='text'>if login true</span>
                        <Dropdown.Menu>
                            <Dropdown.Item><NavLink to={'/individualPage'}>IndividualPage</NavLink></Dropdown.Item>
                            <Dropdown.Item><NavLink to={'/userPage'}>UserPage</NavLink></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    }

                    <Dropdown.Item><NavLink  to='/testLevel'>test level</NavLink></Dropdown.Item>
                    <Dropdown.Item><Link to='footer'>contacts</Link></Dropdown.Item>
                    <Dropdown.Item><NavLink to='/mainPage'>home</NavLink></Dropdown.Item>
                    {/*<Dropdown.Item><Link to='collective'>collective</Link></Dropdown.Item>*/}
                    <Dropdown.Divider/>
                    {/*<Dropdown.Header>Export</Dropdown.Header>*/}
                    <Dropdown.Item><NavLink to={'tel:0800330066'}>0 800 33 00 66</NavLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            {/*<Menu.Menu position='right'>*/}
            {/*    <div className='ui right aligned category search item'>*/}
            {/*        <div className='ui transparent icon input'>*/}
            {/*            <input*/}
            {/*                className='prompt'*/}
            {/*                type='text'*/}
            {/*                placeholder='Search animals...'*/}
            {/*            />*/}
            {/*            <i className='search link icon'/>*/}
            {/*        </div>*/}
            {/*        <div className='results'/>*/}
            {/*    </div>*/}
            {/*</Menu.Menu>*/}
            {!props.userStatus
                ? <button onClick={regOnClick} className='default' >
                    <span>registration</span>
                    <Icon name='arrow alternate circle up outline' id='4' onClick={regOnClick}/>
                </button>
                : <button onClick={logOnClick}>
                    <span>login</span>
                    <Icon name='arrow alternate circle up outline' id='3' onClick={logOnClick}/>
                </button>
            }
            <ExampleModal collapse={collapse && popupId === '4'} closed={cancel}
                          children={<Registration onCansel={cancel}/>}/>
            <ExampleModal collapse={collapse && popupId === '3'} closed={cancel} children={<Login/>}/>
        </Menu>

        {/*<Segment attached='bottom'>*/}
        {/*    <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}
        {/*</Segment>*/}
    </div>

}
export default MenuExampleAttached