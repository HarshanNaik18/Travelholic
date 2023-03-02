
import React, { useState, useEffect } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import { Link } from 'react-router-dom';


const navigate = () => {
  navigator('/packages')
}

function HeroSection() {

  const [currentIndex, setCurrentIndex] = useState(1);

  const heroimg = ["https://content.r9cdn.net/rimg/dimg/43/2c/fe92dfc3-lm-48454-167a97bd72f.jpg?width=1366&height=768&xhint=1488&yhint=1244&crop=true", "https://www.travelmalnad.com/Blog/wp-content/uploads/2018/11/Green-Hills-Landscape-1440x900-1.jpg", "https://i0.wp.com/www.zingbus.com/blog/wp-content/uploads/2022/09/jog-falls-7.jpg"];

  // setInterval(()=>{
  //   const isLastSlide = currentIndex === heroimg.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // },1000);

  
  // useEffect(() => {
  //   const changeHero = () => {
  //     const isLastSlide = currentIndex === heroimg.length - 1;
  //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //     setCurrentIndex(newIndex);
  //   }
  //     setInterval(changeHero,1000);
    
  //   return ()=>{
  //     changeHero();
  //   }
    
  // }, []);
  
  return (
    <div className='hero-container'>
      <img src={`${heroimg[currentIndex]}`} alt='bg'
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'fixed',
          zIndex: '-1'
        }}
      />
      <h1> TRAVELHOLIC</h1>
      <p>Live To Travel</p>
      <div className='hero-btns'>
        <Link to={'/plans'}>
          <Button
            className='btns-plans'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
            MAKE YOUR PLAN
          </Button>
        </Link>
        <Link to={'/packages'}>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={{}}
          >
            PACKAGES
          </Button>
        </Link>

      </div>
    </div>

  );
}

export default HeroSection;

