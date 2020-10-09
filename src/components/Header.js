import React from 'react';
import './Header.scss';
import { IconButton } from '@material-ui/core';
import { Person, Forum } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();

    const iconClick = (event) => {
        history.push(event.currentTarget.dataset.path)
    }

    return (
        <div className="header">
            <IconButton data-path="/user" onClick={iconClick}>
                <Person className="header_icon"></Person>
            </IconButton>
            <img data-path="/" onClick={iconClick} src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="" />
            <IconButton data-path="/messages" onClick={iconClick}>
                <Forum className="header_icon"></Forum>
            </IconButton>
        </div>
    )
}

export default Header
