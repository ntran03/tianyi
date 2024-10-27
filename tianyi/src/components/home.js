import React, { useEffect } from 'react';
import hantang from './images/hantang.jpg';
import longing from './images/longing.jpg';
import umbrella from './images/umbrella.jpg';
import './home.css';
import { Box, Card, Typography, CardContent } from '@mui/material';

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
            <Box id="slideshow">
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

            {/* Card Below Slideshow */}
            <Card 
                variant="outlined" 
                sx={{ 
                    padding: 2, 
                    textAlign: 'center' 
                }}
                className="card-spacing" // Apply the spacing class here
            >
                <CardContent>
                    <Typography variant="h6">
                        Hello!
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Home;
