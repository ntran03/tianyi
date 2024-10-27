import React from "react";
import Slider from "react-slick";

import dunhuang from './costume_images/dunhuang.jpg';
import han from './costume_images/han.jpg';
import hantang from './costume_images/hantang.jpg';
import longing from './costume_images/longing.jpg';
import lotus from './costume_images/lotus.jpg';
import umbrella from './costume_images/umbrella.jpg';
import zhuang from './costume_images/zhuang.jpg';
import dunhuang1 from './costume_images/dunhuang1.jpg';

import './costume_sale.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './fonts.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    typography: {
        
        fontFamily: 'Cormorant, serif'
    }
});

function Costumes() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
    };

    const costumes = [
        { src: han, description: "Spring Harvest《春采》" },
        { src: hantang, description: "Awakening of the Tang Figurines《唐印》" },
        { src: longing, description: "Longing《望》" },
        { src: lotus, description: "Song of the Lotus《莲鼓越歌行》" },
        { src: umbrella, description: "A Stroll in the Spring Rain《雨涧春行图》" },
        { src: zhuang, description: "Longing《望》" },
        { src: dunhuang1, description: "Kalavinka《迦陵频伽》" }
    ];

    return (
        <ThemeProvider theme={theme}>
            <div className="container1">
                <img src={dunhuang} alt="Dunhuang 2023" />
            </div>

            <div className="container2">
                <Slider {...settings}>
                    {costumes.map((costume, index) => (
                        <div key={index} className="slider-item">
                            <img src={costume.src} alt={`Costume ${index + 1}`} />
                            <div className="costume-description">
                                {costume.description}
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="container3">
                Current Catalog <br/>
                <div className="floating-textbox">
                    We have many costumes, accessories, and props for sale! Please take a look our current catalog. If you have any questions, please email us at tianyidance@gmail.com!
                </div>
            </div>
        </ThemeProvider>
    );
}

export default Costumes;
