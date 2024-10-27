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
            <Grid container spacing={4} sx={{ mb: 2, px: 2 }}>
                <Grid item xs={12} sm={6}>
                    <Card 
                        variant="outlined" 
                        sx={{ padding: 3, textAlign: 'center' }}
                    >
                        <CardContent>
                            <Typography variant="h6">
                                Upcoming Events
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
                        sx={{ padding: 3, textAlign: 'center'}} // Increased padding
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
            <Card variant="elevation" sx={{ padding: 3, textAlign: 'center' }}>
                <CardContent>
                    <Typography variant='h6'>
                    Tianyi Dance Team, University of Maryland's only Chinese cultural dance team, is a group of students who express interest in Chinese culture through folk and traditional Chinese dance. Established in 2012, Tianyi Dance Team strives to break down cross-cultural barriers through the graceful, yet powerful language of dance. Our team aims to widen the perspectives of the University of Maryland's student population and local communities so that we all can learn to understand and embrace different cultures. Tianyi Dance Team is committed to its responsibilities under University of Maryland, College Park Office of Campus Programs and University Recreation & Wellness policies.
                    </Typography>
                </CardContent>
            </Card>
        </Box>
    );
}

export default Home;
