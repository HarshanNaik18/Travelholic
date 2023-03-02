import React, { useState } from 'react'
import './inputDetails.css'
import { Link, useNavigate } from 'react-router-dom';

function InputDetails({ open, onClose, type }) {
  const [search, setSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const navigate=useNavigate();
  if (!open) {
    return null;
  }
  const handleSeach = async (e) => {
    e.preventDefault();
    if (!search || !fromDate || !toDate) {
      alert("Fill all the fields");
      return;
    }
    console.log(fromDate);
    console.log(toDate);
    console.log(search);
    sessionStorage.setItem("inputDetailsSearch",search);
    sessionStorage.setItem("inputDetailsType",type);
    sessionStorage.setItem("inputDetailsFromDate",fromDate);
    sessionStorage.setItem("inputDetailsToDate",toDate);
    navigate('/seachresult');
    // console.log();
  }
  return (
    <div style={{
      height:'100%',
      width:'100%',
      display:'flex',
      justifyContent:'center',
      backgroundSize:'cover'
    }}>
      <div className='Overlay'>
        <form className='Popupcontainer' method='post'>
          <div className='input_form_header'>
            <div className='CloseBtn'></div>
            <div style={{ padding: '30px' }}><h1>Enter Details</h1></div>
            <div className='CloseBtn'><p onClick={onClose}>X</p></div>
          </div>

          <label>Name / Place : </label>
          <input type='text' onChange={(e) => setSearch(e.target.value)} />
          <div style={{ display: 'flex', justifyContent: 'center', alignItem: 'center', width: '100%', gap: '40px' }} >
            <div className='DateLeft'>
              <label>From Date </label>
              <input type='date' onChange={(e) => setFromDate(e.target.value)} />
            </div>
            <div className='DateRight'>
              <label>To Date </label>
              <input type='date' onChange={(e) => setToDate(e.target.value)} />
            </div>
          </div>
          <button onClick={handleSeach}>Seach</button>
        </form>
      </div>
    </div>
  )
}

export default InputDetails;
