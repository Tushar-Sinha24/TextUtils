
import './App.css';
import About from './Component/about'
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import React, {useState} from 'react'
import Alert from './Component/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  
    const[mode,setMode]=useState("light")
 
    const[alert,setAlert]=useState("")
    const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null)
      },1500)
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
   
    <Router>
    <Navbar title="TextUtils" mode={mode} toogleMode={toogleMode}/>

      <div className="container-fluid " >
      <Alert alert={alert}/>
      <Switch>
          <Route path="/about">
            <About mode={mode} toogleMode={toogleMode}/>
          </Route>

          <Route path="/">
          <TextForm heading="Enter the text to analyze" mode={mode}  showAlert={showAlert}/>
          </Route>
        </Switch>


      </div>
    </Router>
    
   
  );
}

export default App;
