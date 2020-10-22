import React from 'react'
import './Header.css'

import Logo from '../../assets/images/logo-white.svg';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Avatar} from '@material-ui/core';
import Search from '../Search/Search';

function Header() {

    return (
        <div className="header">
         
        <div className="header__nav">
            <img src={Logo} alt="" className="header__icon"/>

            <div className="header__center">
                <SearchIcon />
                <input type="text" placeholder="Pra onde você vai?"/>            
            </div>

            <div className="header__right">
                <p>Torna-se um anfitrião</p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>

        </div>
       
        <div className="header__search">
        <Search />
        </div> 

    </div>
        
    )
}

export default Header
