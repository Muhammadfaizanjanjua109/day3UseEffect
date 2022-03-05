import React,{useEffect, useState} from 'react'

function BitCoin() {
   const [loading,setloading]=useState(true);
   const [error,setError]=useState(false);
   const [user,setUser]=useState(false);
    useEffect(() => {
      fetch('https://api.github.com/users/mojombo')
      .then((response)=>response.json())
      .then((user)=>{
        const {login}=user;
        setUser(login);
        setloading(false)
      })
      .catch((errors)=>{setError(errors)})
      
    },[])
    

   if(loading){
       return(<h1>Lodding</h1>);
   }
   if(error){
       return(<h1>Error</h1>)
   }
  return (
    <div>{user}</div>

  )
}

export default BitCoin