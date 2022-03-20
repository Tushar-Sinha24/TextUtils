
import './App.css';

import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react'



function App() {
  
    const[mode,setMode]=useState("light")

    const toogleMode=()=>{
      if(mode==='light'){
        setMode("dark");
      }
      else{
          setMode("light");
      }
    }

  return (
   <>
    
   <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>

   <div className="container">
   <TextForm heading="Enter the text to analyze"/>
   {/* <About></About> */}
   </div>
   
   
   </>
  );
}

export default App;
