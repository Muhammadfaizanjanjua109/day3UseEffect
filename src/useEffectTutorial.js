import React,{useEffect, useState} from 'react'

function UseEffectTutorial() {
const UserData='https://api.github.com/users';
const [dat,usedata]=useState([])
const api=async ()=>{
  const data= await fetch(UserData);
  const dataa= await data.json();
  usedata(dataa);
}
useEffect(() => {
 api();
}, [])

{console.log(dat);}
  return (
  
    <>
  {dat.map((apidata)=>{
    const {avatar_url,id,followers_url,user}=apidata;
  return <> 
  
  <h1>{followers_url}</h1>
  <h2>{user}</h2>
  <img src={avatar_url} />
       </>
 })}   
    </>
  )
}

export default UseEffectTutorial