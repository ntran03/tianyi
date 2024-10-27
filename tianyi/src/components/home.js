import React, { useEffect } from 'react';
import hantang from './images/hantang.jpg';
import longing from './images/longing.jpg';
import umbrella from './images/umbrella.jpg';
import './home.css';
import { Grid, Box, Card, Typography, CardContent } from '@mui/material';

function Home() {
    useEffect(() => {
        const slides = document.querySelectorAll('.slide'); 
        let currentSlide = 0; 

        function nextSlide() { 
            slides[currentSlide].className = 'slide'; 
            currentSlide = (currentSlide + 1) % slides.length; 
            slides[currentSlide].className = 'slide active'; 
        } 

        const slideInterval = setInterval(nextSlide, 2000); 
        return () => clearInterval(slideInterval);
    }, []);

    return (
        <Box sx={{ padding: 0 }}>
            {/* Slideshow */}
            <Box id="slideshow" sx={{ position: 'relative', height: '400px', width: '100%', mb: 4 }}> {/* Increased mb */}
                <div className="slide active">
                    <img src={hantang} alt="Han Tang 2023"/>
                </div>
                <div className="slide">
                    <img src={longing} alt="Longing 2023"/>
                </div>
                <div className="slide">
                    <img src={umbrella} alt="Umbrella 2023"/>
                </div>
            </Box>
            {/* Grid for two cards */}
            <Grid container spacing={4} sx={{ mb: 2 }}> {/* Increased spacing */}
                <Grid item xs={12} sm={6}>
                    <Card 
                        variant="outlined" 
                        sx={{ padding: 3, textAlign: 'center' }} // Increased padding
                    >
                        <CardContent>
                            <Typography variant="h6">
                                Card 1
                            </Typography>
                            <Typography variant="body2">
                                This is the content of Card 1.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card 
                        variant="outlined" 
                        sx={{ padding: 3, textAlign: 'center' }} // Increased padding
                    >
                        <CardContent>
                            <Typography variant="h6">
                                Card 2
                            </Typography>
                            <Typography variant="body2">
                                This is the content of Card 2.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Home;
