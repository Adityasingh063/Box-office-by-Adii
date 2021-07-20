/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { useLocation } from 'react-router';
// import { Link } from "react-router-dom";
import { NavList, LinkStyled } from './Navs.style';

const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/starred', text: 'Starred' }
]

const Navs = () => {

    const location = useLocation();

    return (
        <div>
            <NavList>
                {
                    LINKS.map(item =>
                        <li
                            key={item.to}>
                            <LinkStyled to={item.to} 
                            className ={item.to === location.pathname?'active':''}>
                                {item.text}</LinkStyled>
                        </li>
                    )
                }
                {/* <li>  <Link to="/starred">Go to Starred Page.</Link> </li> */}
            </NavList>
        </div>
    )
}

export default memo(Navs);
