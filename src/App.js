
import './App.css';
import About from './Component/about';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react'



function App() {
  
    const[mode,setMode]=useState("light")
  
  return (
   <>
    
   <Navbar title="TextUtils" mode={mode}/>

   <div className="container">
   <TextForm heading="Enter the text to analyze"/>
   {/* <About></About> */}
   </div>
   
   
   </>
  );
}

export default App;
