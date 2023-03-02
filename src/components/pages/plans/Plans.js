import React from 'react'
import Footer from '../../Footer';
import PackageTypes from './PackageTypes'
import './Plans.css'
import adventure from './adventure.jpg';
import beach from './beach.jpg';
import historical from './historical.jpg';
import religious from './religious.jpg';
import resort from './resort.jpg'
export default function Plans() {
  const slides = [
    { url: `${adventure}`, title: "Adventure" },
    { url: `${beach}`, title: "Beach" },
    { url: `${historical}`, title: "Historical" },
    { url: `${religious}`, title: "Religious" },
    { url: `${resort}`, title: "Resort" },
  ];
  return (
    <>
      <div>
        <div className='MainContainer' >
          Package Types
        </div>
        <div className='slider'>
          <PackageTypes slides={slides} />
        </div>
        <div className='footer'></div>
      </div>
      <Footer />
    </>
  )
}


