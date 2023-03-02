import React,{useState} from 'react'
import './PackageCard.css'
import PopUpCard from './PopUpCard'

const PackageCards = ({ id, image, name, loc, days, price, desc, type, details }) => {
    const [openPopUpCard, setOpenPopUpCard]=useState(false);

    return (
        <>
            <button className='popupButton' onClick={()=>setOpenPopUpCard(true)}>
                <div className="Package_cards">
                    <div className='loc__img' style={{
                        backgroundImage: `url(${image})`,
                        display:'flex',
                        justifyContent:'left',
                        alignContent:'center',
                    }} >
                        <div style={{backgroundColor:'blue',color:'white',width:'100px',height:'25px',display:'flex',alignItems:'center',textAlign:'center',justifyContent:'center',borderBottomRightRadius:'10px',borderTopLeftRadius:'10px'}}>{type}</div>
                    </div>
                    <hr />
                    <div className="middle">
                        <div className="middle__left">
                            <h4>Name : {name}</h4>
                            <h4>Location : {loc}</h4>
                        </div>
                        <div className="middle__right">
                            <h4>No.of days : {days}</h4>
                            <h4>Price :  {price}</h4>
                        </div>
                    </div>
                    <hr />
                    <div className="bottom">
                        <p>{desc}</p>
                    </div>
                </div>
            </button>
            <PopUpCard 
            open={openPopUpCard}
            onClose={()=>setOpenPopUpCard(false)}
            image={image}
            name={name}
            type={type}
            loc={loc}
            days={days}
            price={price}
            desc={desc}
            details={details}
            />
        </>
    )
}

export default PackageCards
