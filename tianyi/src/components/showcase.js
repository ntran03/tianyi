import React, { useState } from 'react';
import Box from '@mui/material/Box';
import lotus from './images/lotus.jpg';
import './showcase.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Showcase() {
    const years = Array.from({ length: 11 }, (_, index) => 2024 - index);
    const links = [
        // add links here
    ]
    const images = {
        2014: require('./images/2014.jpg'),
        2015: require('./images/2015.jpg'),
        2016: require('./images/2016.jpg'),
        2017: require('./images/2017.jpg'),
        2018: require('./images/2018.jpg'),
        2019: require('./images/2019.jpg'),
        2020: require('./images/2020.jpg'),
        2021: require('./images/2021.jpg'),
        2022: require('./images/2022.jpg'),
        2023: require('./images/2023.jpg'),
        2024: require('./images/2024.jpg'),
    };

    return (
        <Box sx={{ padding: 0 }}>
            <Box>
                <div className="lotus">
                    <img src={lotus} alt="Lotus" className="lotus-image" />
                </div>
            </Box>
            <Box>
                <div className="past">
                    <h1>Past Showcases</h1>
                    <p>Hover over each showcase flyer to learn more! Click the flyers for the full Youtube videos.</p>
                </div>
            </Box>
            <Grid container spacing={2} sx={{ margin: '20px', justifyContent: 'center'}}>
            {years.map(year => (
                    <Grid item xs={12} sm={6} md={3} key={year} sx={{ margin: '5px'}}>
                        <Card 
                            variant="outlined" 
                            sx={{ 
                                position: 'relative', 
                                height: '500px', 
                                overflow: 'hidden',
                                '&:hover .overlay': {
                                    opacity: 1, 
                                }
                            }}
            
                        >
                            <img
                                src={images[year]} 
                                alt={year}
                                style={{ 
                                    width: '100%', 
                                    height: '100%', 
                                    objectFit: 'cover', 
                                    position: 'absolute', 
                                    top: 0,
                                    left: 0,
                                    zIndex: 0 
                                }}
                            />
                            <CardContent 
                                sx={{ 
                                    position: 'absolute', 
                                    bottom: 0, 
                                    left: 0, 
                                    right: 0, 
                                    zIndex: 1,
                                    color: '#00000', 
                                    backgroundColor: 'rgba(256, 256, 256, 0.6)', 
                                    padding: '16px',
                                    margin: '8px',
                                    opacity: 0, 
                                    transition: 'opacity 0.3s ease', 
                                    '&.overlay': { 
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        padding: '8px',
                                    }
                                }}
                                className="overlay"
                            >
                                {/* <Typography variant="h6" component="div">
                                    {dancer.name}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }}>
                                    {dancer.description}
                                </Typography>
                                <Typography 
                                    variant="body2" 
                                    sx={{ whiteSpace: 'pre-line', textAlign: 'center' }}
                                >
                                    {dancer.additionalDetails}
                                </Typography> */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box>
                <div className="past">
                    <h1>Other Performances</h1>
                </div>
            </Box>
        </Box>
    )
}

export default Showcase;