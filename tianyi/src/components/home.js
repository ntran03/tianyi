import React, { useEffect } from 'react';
import hantang from './images/hantang.jpg';
import longing from './images/longing.jpg';
import umbrella from './images/umbrella.jpg';
import './home.css';

function Home() {
    useEffect(() => {
        var slides = document.querySelectorAll('.slide'); 
        var currentSlide = 0; 
        

        function nextSlide() { 
            slides[currentSlide].className = 'slide'; 
            currentSlide = (currentSlide + 1) % slides.length; 
            slides[currentSlide].className = 'slide active'; 
        } 
        var slideInterval = setInterval(nextSlide, 2000); 
        return () => clearInterval(slideInterval);
    }, []);
    return (
        <div>
        
            <div id="slideshow">
                <div class="slide">
                    <img src={hantang} alt="Han Tang 2023"/>
                </div>
                <div class="slide">
                    <img src={longing} alt="Longing 2023"/>
                </div>
                <div class="slide">
                    <img src={umbrella} alt="Umbrella 2023"/>
                </div>
            </div>
            
        </div>
    );

    
}

export default Home;