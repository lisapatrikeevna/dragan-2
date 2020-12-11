// import React from "react";
import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import logo from './../../img/logo.png'
type headerProps={

}
// const Header= (props:headerProps)=>{
//     return(
//         <div className="container">
//             <nav className="navbar navbar-expand-lg navbar-light">
//                 <NavLink className="navbar-brand" to="#"><img src="./img/logo.png" alt="logo" className="logo"></NavLink>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
//                         aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                     <ul className="navbar-nav">
//                         <li className="nav-item active">
//                             <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                         </li>
//                         <li className="d-flex nav-item"><i className="fas fa-mobile-alt"></i><a href="#">0 800 33 00
//                             66</a></li>
//                         <li className="d-flex nav-item"><i className="fas fa-file-contract"></i><a
//                             href="#footer">contacts</a></li>
//                         <li className="nav-item dropdown d-flex flagwrep">
//                             <a className="nav-link dropdown-toggle d-flex" href="#" id="navbarDropdownMenuLink"
//                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                                 <i className="fas fa-flag"></i><span>lang</span>
//                             </a>
//                             <div className="dropdown-menu flag" aria-labelledby="navbarDropdownMenuLink">
//                                 <a className="dropdown-item d-flex" href="/index.php"><img src="./img/uar.png" alt="">
//                                     <p>eng</p></a>
//                                 <a className="dropdown-item d-flex" href="/index.php"><img src="./img/fr.png" alt="">
//                                     <p>fr</p></a>
//                                 <a className="dropdown-item d-flex" href="/index_ru.php"><img src="./img/ru.png" alt="">
//                                     <p>ru</p></a>
//                             </div>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>
//         </div>
//     )
// }


// TODO: Update <Search> usage after its will be implemented

const MenuExampleAttached = () => (
    <div className="header">
        <Menu attached='top'>
            <NavLink to={'/home'} ><img src={logo} alt="logo" className="logo" style={{width:'90px'}}/></NavLink>
            <Dropdown item icon='bars' simple>
                <Dropdown.Menu>
                    <Dropdown.Item>
                        <Icon name='dropdown' />
                        <span className='text'>New</span>

                        <Dropdown.Menu>
                            <Dropdown.Item>Document</Dropdown.Item>
                            <Dropdown.Item>Image</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown.Item>
                    <Dropdown.Item>Open</Dropdown.Item>
                    <Dropdown.Item>Save...</Dropdown.Item>
                    <Dropdown.Item>Edit Permissions</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Header>Export</Dropdown.Header>
                    <Dropdown.Item>Share</Dropdown.Item>
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
                        <i className='search link icon' />
                    </div>
                    <div className='results' />
                </div>
            </Menu.Menu>

        </Menu>

        {/*<Segment attached='bottom'>*/}
        {/*    <img src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />*/}
        {/*</Segment>*/}
    </div>
)

export default MenuExampleAttached