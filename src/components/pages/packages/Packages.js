import { SearchOutlined } from '@material-ui/icons'
import React, {useState, useEffect} from 'react'
import './Packages.css'
import PackageCards from './PackageCards'
import Footer from '../../Footer'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../../../Firebase/firebase'




function Packages() {

  const [filterData, setFilterData]=useState([]);
  const [allPackages, setAllPackages]=useState([]);
  const [search, setSearch]=useState('');
  const [searchData, setSearchData]=useState('');



  const projectRef = collection(db,"Packages");

  const searchPackages = async(e)=>{
    e.preventDefault();
    const data = allPackages.filter((item)=>item.Title.toLowerCase().includes(search) || item.Loc.toLowerCase().includes(search) || item.Loc.toLowerCase().includes(search));
    setFilterData(data);
  }

  useEffect(()=>{

    setSearch(searchData.toLowerCase());
  },[searchData]);

  useEffect(()=>{
    const q = query(projectRef);
    const FetchData = onSnapshot(q,querySnapshot=>{
      const data=[];
      querySnapshot.forEach(item=>{
        data.push({...item.data(), id:item.id});
      });
      setAllPackages(data);
      setFilterData(data);
    });

    return ()=>{
      FetchData();
    }

    //eslint-disable-next-line
  },[]);

  return (
    <>
      <div className='package_header'>
        <h1>Explore the World</h1>
        <form method='post'>
          <div className='search_input'> <input type='text' placeholder='Search Here..!!' onChange={(e)=>setSearchData(e.target.value)} ></input> </div>
          <div className='search_input'> <button onClick={searchPackages}> <SearchOutlined /> </button> </div>
        </form>
      </div>
      <div className='packageContainer'>
        {
          (filterData.length > 0)? filterData.map((pack)=>{
            return(
              <PackageCards
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
          }):"Packages Not found"
        }
      </div>
      <Footer/>
    </>
  )
}

export default Packages
