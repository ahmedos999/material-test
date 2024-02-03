// import React from 'react'
// import {useState} from 'react'
// // import Button from '@mui/material/Button';
// // import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Slider from '@mui/material/Slider';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';

import React, { useState } from 'react';

import { Menu } from '@mui/material';
import {MenuItem} from '@mui/material';
import {Button} from '@mui/material';



export default function Main() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Item 1</MenuItem>
                <MenuItem onClick={handleClose}>Item 2</MenuItem>
                <MenuItem onClick={handleClose}>Item 3</MenuItem>
            </Menu>
        </div>
    );


}
