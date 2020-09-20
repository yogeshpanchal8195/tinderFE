import React from 'react';
import './SwipeButtons.scss'
import { IconButton } from '@material-ui/core';
import { Replay, Close, StarRate, Favorite, FlashOn } from '@material-ui/icons';

function SwipeButtons() {
    return (
        <div className="swipeButtons">
            <IconButton className="swb swipeButtons_repeat">
                <Replay/>
            </IconButton>
            <IconButton className="swb swipeButtons_left">
                <Close/>
            </IconButton>
            <IconButton className="swb swipeButtons_star">
                <StarRate/>
            </IconButton>
            <IconButton className="swb swipeButtons_night">
                <Favorite/>
            </IconButton>
            <IconButton className="swb swipeButtons_lighting">
                <FlashOn/>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
