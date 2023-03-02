import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputDetails from './inputDetails'
import './PackageTypes.css'
import { db } from "../../../Firebase/firebase";
import { collection, getDocs } from "firebase/firestore";


const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",

};
const PackageTypes = ({ slides }) => {
  // const [openInputDetails, setOpenInputDetails] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const handleDomainClick = async () => {
    var search = [];
    const type = slides[currentIndex].title;
    await getDocs(collection(db, "Packages"))
      .then((querySnapshot) => {
        querySnapshot.forEach(element => {
          if (element.data().Type === type) {
            search.push(element.data());
          }
        });
      });
    console.log(search);
    sessionStorage.setItem("Type", slides[currentIndex].title);
    sessionStorage.setItem("resultPackages", JSON.stringify(search));
    navigate('/seachresult');
  }
  return (
    <>
      <div className="Package_type_Container">
        <div className="Main_Slider_card_container" >
          <div className="LeftArrow" onClick={goToPrevious}> ❰ </div>
          <div className="Slider_Card_Container" style={{ backgroundImage: `url(${slides[currentIndex].url})` }} onClick={handleDomainClick} >
          </div>
          <div className="RightArrow" onClick={goToNext} > ❱ </div>
        </div>
        <div className="Slider_Name_Container" >
          <div className="slider_name_holder">{slides[currentIndex].title}</div>
          <div className="Slider_dots_container">
            {
              slides.map((slide, slideIndex) => (
                <div style={dotStyle}
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                >
                  ●
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* <InputDetails
        open={openInputDetails}
        onClose={() => setOpenInputDetails(false)}
        type={slides[currentIndex].title}
      /> */}
    </>
  );

};

export default PackageTypes;