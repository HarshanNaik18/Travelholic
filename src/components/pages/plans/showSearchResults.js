
import React, { useState, useEffect } from 'react'
import '../packages/PackageCard.css'
import PackageCards from '../packages/PackageCards';
import { SearchOutlined } from '@material-ui/icons';


function ShowSearchResults() {
  const [packageSearchDetails, setSearchPackageDetails] = useState([]);
  const [type, setType] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [getSearchItem, setGetSearchItem] = useState('');
  const [search, setSearch] = useState('');



  const handleSearch = async (e) => {
    e.preventDefault();
    console.log(search);
    const data = packageSearchDetails.filter((item)=>item.Title.toLowerCase().includes(search) || item.Loc.toLowerCase().includes(search));
    setFilterData(data);
  }

  useEffect(() => {
    setSearch((getSearchItem).toLowerCase());
  }, [getSearchItem]);

  useEffect(()=>{
    setType(JSON.stringify(sessionStorage.getItem("Type")));
  },[]);

  useEffect(() => {
    setSearchPackageDetails(JSON.parse(sessionStorage.getItem("resultPackages")));
  }, []);

  useEffect(()=>{
    setFilterData(JSON.parse(sessionStorage.getItem("resultPackages")));
  },[]);


  return (
    <div>
      <div className='package_header'>
        <h1>Explore the World!!</h1>
        <h2>{type.toUpperCase()}</h2>
        <form method='post'>
          <div className='search_input'>
            <input type='text' placeholder="Search Here...!!" onChange={(e) => setGetSearchItem(e.target.value)} /></div>
          <div className='search_icon' ><button onClick={handleSearch} > <SearchOutlined /> </button></div>
        </form>
      </div>
      <div className="packageContainer">
        {
          (filterData.length > 0) ?
            filterData.map((pack, index) => {
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
            }) : "Search not found"
        }
      </div>
    </div>
  )
}

export default ShowSearchResults;
