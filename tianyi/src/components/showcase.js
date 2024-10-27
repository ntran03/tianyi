import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import lotus from './images/lotus.jpg'

function Showcase() {
    return (
        <Box sx={{ padding: 0, pt: 10 }}>
            <Box>
                <div>
                    <img src={lotus} alt="Lotus"/>
                </div>
            </Box> 
            <Box>
            <div>
                <h1>Past Showcases</h1>
            </div>
            </Box>
        </Box>
    )
}

export default Showcase;