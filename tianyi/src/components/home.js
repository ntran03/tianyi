import React, { useEffect } from 'react';
import hantang from './images/hantang.jpg';
import longing from './images/longing.jpg';
import umbrella from './images/umbrella.jpg';
import './home.css';
import { Grid, Box, Card, Typography, CardContent } from '@mui/material';
import './fonts.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        
        fontFamily: 'Cormorant, serif'
    }
});


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

    const upcoming_events = [
        { title: "Tour of Taiwan: 11/15, 7:00 pm", description: "Dai is performing at TASA's Tour of Taiwan!"},
        { title: "Forward Motion Showcase, 11/24, 5:30 pm", description: "Nicole and Huanying are performing at Forward Motion's showcase!"},
        { title: "Unbound Fall Showcase: 12/8, 3:00 pm", description: ""}
    ];

    const prev_events = [
        { title: "aKDPhi Pink Pageant: 10/19, 7:00 pm", description: "Anna performed 醉清波.", link: "https://youtu.be/4eZWykg_WOc" },
        { title: "Tianyi 2024 Showcase, 4/13, 7:00 pm", description: "", link: "https://www.youtube.com/playlist?list=PL0px6vhlAgF4YTdttUuTvxhxfN49oHjfB" },
        { title: "n/a", description: "", link: "" }
    ];

    return (
        <ThemeProvider theme={theme}>
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
                <Grid container spacing={4} sx={{ mb: 2, px: 2}}>
                    <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
                        <Card 
                            variant="outlined" 
                            sx={{ padding: 3, textAlign: 'center', bgcolor: "#ebe9e4", opacity: 0.6}}
                        >
                            <CardContent sx={{opacity: 1}}>
                                <Typography variant="h6">
                                    Upcoming Events
                                </Typography>
                                <div className="timeline">
                                    <div className="outer">
                                        {upcoming_events.map((event, index) => (
                                            <div className="card" key={index}>
                                                <div className="info">
                                                    <div className="title" style={{ fontWeight: 'bold' }}>{event.title}</div>
                                                    <div>{event.description}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card 
                            variant="outlined" 
                            sx={{ padding: 3, textAlign: 'center', bgcolor: "#ebe9e4", opacity: 0.6}} // Increased padding
                        >
                            <CardContent>
                                <Typography variant="h6">
                                    Previous Performances
                                </Typography>
                                <div className="timeline">
                                    <div className="outer">
                                        {prev_events.map((event, index) => (
                                            <div className="card" key={index}>
                                                <div className="info">
                                                    <div className="title" style={{ fontWeight: 'bold' }}>{event.title}</div>
                                                    <div>{event.description} Watch the performance <a href={event.link} target='_blank'>here</a>!</div>
        
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
        </ThemeProvider>
    );
}

export default Home;
