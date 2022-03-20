
import './App.css';

import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react'



function App() {
  
    const[mode,setMode]=useState("light")

    const toogleMode=()=>{
      if(mode==='light'){
        setMode("dark");
        document.body.style.backgroundColor="#212529";
      }
      else{
          setMode("light");
          document.body.style.backgroundColor="white";
      }
    }

  return (
   <>
    
   
   <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>

      <div className="container " >
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About></About> */}
      </div>
   
   
   
   </>
  );
}

export default App;
