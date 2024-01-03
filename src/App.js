
import './App.css';
import {LoadImage,Search} from './components/LoadImage';
import Image from './components/Image'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
 const data = LoadImage();

 const [query,setQuery]=useState()
 const [searchQ,setSerach]=useState()


const search = () =>{
 setSerach(query);
}
const searchData= Search(query)
console.log(searchData)
 
  return (
    <div className="App container-flex text-center">
      <div className='header container-flex   w-100  '>
       <div className=' box col-lg-6 '><input type="text" className='form-control'  onChange={(e)=>setQuery(e.target.value)}/></div>
        <div className=' box col-lg-1 '><button className='btn  butt btn-danger' onClick={search}>Search</button></div>
       
      </div>
      <div className='contain'>
      {searchQ ?
      searchData.map((img,key)=>(
       <Image src={img.urls.thumb} key={key}></Image>
  )) :
    data.map((img,key)=>(
       <Image src={img.urls.thumb} key={key}></Image>
  ))}
    
    
    </div>
  
    </div>
  );
    }

export default App;
