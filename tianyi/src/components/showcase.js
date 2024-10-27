import React, { useState } from 'react';
import Box from '@mui/material/Box';
import lotus from './images/lotus.jpg';
import './showcase.css'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './fonts.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {

        fontFamily: 'Cormorant, serif'
    }
});

const description = [
    {
        id: 2014,
        title: "Awakens",
        year: "2013-2014",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF6ENAgOdTvcpl89p84AihTa&si=VZt6bz6ucvEA9ljv"
    },
    {
        id: 2015,
        title: "Unfolding Traditions",
        year: "2014-2015",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF7r17KDnqvAlzcdgssBNezN&si=ur0CHeZJ4QINm0M9"
    },
    {
        id: 2016,
        title: "In Full Bloom",
        year: "2015-2016",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF7Fq0x_sUsy0G5Y9Q90SJaF&si=OwMjGiqZkS9Tqsxw"
    },
    {
        id: 2017,
        title: "Radiance",
        year: "2016-2017",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF6jcNY3dCHL7OENU4DxJdBl&si=-fEDPJR6wGxpmFg9"
    },
    {
        id: 2018,
        title: "Nature's Harmony",
        year: "2017-2018",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF40oxJwAfAeWEEwc2hMeVq5&si=kVaGqgK02cYa8_KJ"
    },
    {
        id: 2019,
        title: "Woven Paths",
        year: "2018-2019",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF5c2LaJ5bttd8SH8Ax8Lw5Z&si=va6k86PQ1qf7A6I8"
    },
    {
        id: 2020,
        title: "Rising Tide",
        year: "2019-2020",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF6yI3h0rV3RoaNpPR8dCa2T&si=w99UI38sGJQ10wgT"
    },
    {
        id: 2021,
        title: "Rising Tide",
        year: "2020-2021",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF5lm8fsrKMozHNW87KskCog&si=YzmuYz7LexSAwp1_"
    },
    {
        id: 2022,
        title: "Bridge of Memories",
        year: "2021-2022",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF6PVjxCy3P2u931bcJ999WB&si=2XD62SYrCp_e0B9L"
    },
    {
        id: 2023,
        title: "Transcendence",
        year: "2022-2023",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF6umlU0NRqFfa8jmHtwgW7M&si=Q-6xn1L0Kwkw1QAX"
    },
    {
        id: 2024,
        title: "Spirit of Vitality",
        year: "2023-2024",
        link: "https://youtube.com/playlist?list=PL0px6vhlAgF4YTdttUuTvxhxfN49oHjfB&si=8MgmEZhPD1snU_QB"
    }
]

const years = Array.from({ length: 11 }, (_, index) => 2024 - index);
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

function find(year) {
    const show = description.find(desc => desc.id == year);
    return show;
}

function Showcase() {
    return (
        <ThemeProvider theme={theme}>
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
                <Grid container spacing={2} sx={{ margin: '20px', justifyContent: 'center' }}>
                    {years.map(year => (
                        <Grid item xs={12} sm={6} md={3} key={year} sx={{ margin: '5px' }}>
                            <a href={find(year).link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
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
                                            willChange: 'opacity',
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
                                        <Typography variant="h6" component="div">
                                            {find(year).title}
                                        </Typography>
                                        <Typography sx={{ mb: 1.5 }}>
                                            {find(year).year}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </a>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

export default Showcase;