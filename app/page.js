'use client'

import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Home() {


  const [count,setCount] = useState(0);
  const [data,setData] = useState([]);

  function getAll(){
    axios.get(`/api`)
    .then(res=>{
      setData(res.data);
    });
  }

  function getUrl(n){
    axios.get(`/api/${n}`)
    .then(res=>{
      console.log(res.data[0]);
    });
   
  }

  function postUrl(n){
    axios.post('/api',{id:n,name:'chamin'})
    .then(res=>{
      setData(res.data);
      setCount(count+1)
    });
  }
useEffect(()=>{  
  getAll();
},[])
    


  return (
   <>
    <button onClick={()=>{getUrl(count)}}>동적라우트</button>
    <button onClick={()=>{postUrl(count+1)}}>저장</button>
    
    {
      data.map((obj)=>(
        <p key={obj.id}>{obj.id} {obj.name} </p>
      ))
    }
   </>
  )
}
