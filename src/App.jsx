import React, { useEffect, useState } from 'react'
function App() {
    const [data,setData]=useState([])
    useEffect(()=>{
      const authToken = 'VxeuTv'; 
      const headers = {
      Authorization: `Bearer ${authToken}`,
    };
        fetch('http://20.244.56.144:80/train/trains',{headers})
        .then(res=>res.json())
        .then(info=>setData(info))
        .catch((err)=>console.log(err));
    },[])
  return (
    <div>
      <ul>
        <li>{data[0]}</li>
      </ul>
    </div>
  )
}

export default App