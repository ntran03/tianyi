import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import lotus from './images/lotus.jpg';
import './showcase.css'

function Showcase() {
    return (
        <Box sx={{ padding:0 }}>
            <Box>
                <div className="lotus">
                    <img src={lotus} alt="Lotus" className="lotus-image"/>
                </div>
            </Box> 
            <Box>
                <div className="past">
                    <h1>Past Showcases</h1>
                    <p>Hover over each showcase flyer to learn more! Click the flyers for the full Youtube videos.</p>
                    
                </div>
            </Box>
            <Box>
                <div className="past">
                    <h1>Other Performances</h1>
                </div>
            </Box>
        </Box>
    )
}

export default Showcase;