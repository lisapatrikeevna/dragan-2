// import React from "react";
import React, {useState} from 'react'
import {Dropdown, Icon, Menu, Segment} from 'semantic-ui-react'
import {NavLink, Redirect} from "react-router-dom";
import logo from './../../img/logo.png'
import {ExampleModal} from "../../common/modalForm/exampleModal";
import {Login} from "../login/login";
import {Link} from 'react-scroll/modules';
import cl from './header.module.css';
import {Registration} from "../Registration/registration";

// TODO: Update <Search> usage after its will be implemented
type propsType = {
    userStatus: boolean
}
const MenuExampleAttached = (props: propsType) => {

    let [popupId, setPopupId] = useState('')
    let [collaps, setcollaps] = useState(false)
    const regOnClick = () => {
        setcollaps(!collaps)
        setPopupId("4")
    }
    const logOnClick = () => {
        setcollaps(!collaps)
        setPopupId("3")
    }
    const onCansel = () => {
        setcollaps(!collaps)
    }
    return <div className="header">
        <Menu attached='top'>
            <NavLink to={'/home'}><img src={logo} alt="logo" className="logo" style={{width: '90px'}}/></NavLink>
            <Dropdown item icon='bars' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Icon name='dropdown'/>
                        <span className='text'>if login true</span>
                        <Dropdown.Menu>
                            <Dropdown.Item>Document</Dropdown.Item>
                            <Dropdown.Item>Image</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>test level</Dropdown.Item>
                    <Dropdown.Item><Link to='footer'>contacts</Link></Dropdown.Item>
                    <Dropdown.Item><Link to='individual'>individual</Link></Dropdown.Item>
                    <Dropdown.Item><Link to='collective'>collective</Link></Dropdown.Item>
                    {/*<Dropdown.Item><NavLink to='registration'>registration</NavLink></Dropdown.Item>*/}
                    {/*<Dropdown.Item>Edit Permissions</Dropdown.Item>*/}
                    <Dropdown.Divider/>
                    {/*<Dropdown.Header>Export</Dropdown.Header>*/}
                    <Dropdown.Item><NavLink to={'tel:0800330066'}>0 800 33 00 66</NavLink></Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position='right'>
                <div className='ui right aligned category search item'>
                    <div className='ui transparent icon input'>
                        <input
                            className='prompt'
                            type='text'
                            placeholder='Search animals...'
                        />
                        <i className='search link icon'/>
                    </div>
                    <div className='results'/>
                </div>
            </Menu.Menu>
            {props.userStatus
                ? <button onClick={regOnClick}>
                    <span>registration</span>
                    <Icon name='arrow alternate circle up outline' id='4' onClick={regOnClick}/>
                </button>
                : <button onClick={logOnClick}>
                    <span>login</span>
                    <Icon name='arrow alternate circle up outline' id='3' onClick={logOnClick}/>
                </button>
            }
            <ExampleModal collaps={collaps && popupId === '4'} onCansel={onCansel} children={<Registration/>}/>
            <ExampleModal collaps={collaps && popupId === '3'} onCansel={onCansel} children={<Login/>}/>
        </Menu>

        {/*<Segment attached='bottom'>*/}
        {/*    <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}
        {/*</Segment>*/}
    </div>

}
export default MenuExampleAttached