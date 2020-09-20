import React from 'react';
import './Header.scss';
import { IconButton } from '@material-ui/core';
import { Person , Forum } from '@material-ui/icons'

function Header() {
    return (
        <div className="header">
            <IconButton>
                <Person className="header_icon"></Person>
            </IconButton>
            <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt=""/>
            <IconButton>
                <Forum className="header_icon"></Forum>
            </IconButton>
        </div>
    )
}

export default Header
