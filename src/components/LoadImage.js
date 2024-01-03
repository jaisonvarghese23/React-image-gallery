import React, { useEffect, useState } from 'react'
import axios from 'axios'
const count = 1;
function LoadImage() {
   
    const[state,setState]=useState([]);
    useEffect(()=>{
        axios.get("https://api.unsplash.com/photos?client_id=yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo")
        .then((data)=>{
            setState(data.data)
        })

    },[count])
   
  return  state;
}
function Search(query) {
   
    const[state,setState]=useState([]);
    useEffect(()=>{
        axios.get("https://api.unsplash.com/search/photos?query="+query+"&client_id=yAjPRLciMKWGxO4pcz5fvCJmfzQw_oUtwbo77ZE1Wyo")
        .then((data)=>{
            setState(data.data.results)
        })

    },[query])
   
  return  state;
}

export {LoadImage,Search}