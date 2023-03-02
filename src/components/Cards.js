import React, { useState, useEffect } from 'react';
import './Cards.css';
import PackageCards from './pages/packages/PackageCards'
import { db } from '../Firebase/firebase';
import { collection, getDocs } from 'firebase/firestore';
import './pages/packages/Packages.css'
function Cards() {

  useEffect(() => {
    FetchData();
  }, []);

  const [packages, setPackages] = useState([]);

  const FetchData = async () => {
    await getDocs(collection(db, "Packages"))
      .then((querySnapshot) => {
        setPackages([]);
        querySnapshot.forEach((doc) => {
          setPackages(arr => [...arr, doc.data()])
        })
      })
  }

  return (
    <>
      <div style={{
        backgroundColor: 'white',
        paddingTop: '50px'
      }}>
        <h1 style={{
          color:'orange',
          padding:'20px'
        }}>Popular Packages</h1>

        <div className="packageContainer">
          {
            packages.map((pack, index) => {

              if (index < 16 && index >= 10) {
                return (
                  <PackageCards
                    id={index}
                    image={pack.Image}
                    name={pack.Title}
                    loc={pack.Loc}
                    days={pack.Days}
                    price={pack.Price}
                    desc={pack.Description}
                    type={pack.Type}
                    details={pack.Details}
                  />
                )
              }
            })
          }
        </div>
      </div>
    </>
  );
}

export default Cards;