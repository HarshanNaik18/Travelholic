import React, {useState, useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';
import HeroSection from '../HeroSection';
import { ToastContainer } from 'react-toastify';


// var reLoad = true;
export default function Home() {
    
    return (
        <>
           <HeroSection/>
            <Cards/>
            <Footer/>
            <ToastContainer/>
        </>
    )
}