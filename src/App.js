
import './App.css';
// import About from './Component/about'
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react'
import Alert from './Component/Alert';



function App() {
  
    const[mode,setMode]=useState("light")
 
    const[alert,setAlert]=useState("")
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
    }

    const toogleMode=()=>{
      if(mode==='light'){
        setMode("dark");
        document.body.style.backgroundColor="#212529";
        showAlert("Dark Mode has been enabled","Success");
      }
      else{
          setMode("light");
          document.body.style.backgroundColor="white";
          showAlert("Light Mode has been enabled","Success");
      }
    }

  return (
   <>
    
   
   <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>

      <div className="container-fluid " >
      <Alert alert={alert}/>
      <TextForm heading="Enter the text to analyze" mode={mode}/>
      {/* <About mode={mode} toogleMode={toogleMode}/> */}
      </div>
   
   
   
   </>
  );
}

export default App;
