import React,{useState} from 'react'
import { db } from '../../../Firebase/firebase';
import {collection, getDocs} from 'firebase/firestore'

export default function Weather() {
    const [info , setInfo] = useState([]);

    window.addEventListener('load', () => {
        Fetchdata();
      });
 
    const Fetchdata = async()=>{
        await getDocs(collection(db, "users"))
        .then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                setInfo(arr => [...arr , data]);
            });
        })
        console.log(info);
    }
  return (
    <div>
    <center>
    <h2>Student Details</h2>
    </center>
 
{
    info.map((data) => (
    <Frame course={data.name}
           name={data.email}
           age={data.phone}/>
    ))
}
</div>
  );
}

const Frame = ({course , name , age}) => {
    console.log(course + " " + name + " " + age);
    return (
        <center>
            <div className="div">
                 
<p>NAME : {name}</p>
  
                 
<p>Age : {age}</p>
 
                 
<p>Course : {course}</p>
  
            </div>
        </center>
    );
}
