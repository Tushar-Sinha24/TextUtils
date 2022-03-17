
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
   <>
    
   <Navbar title="TextUtils"/>

   <div className="container">
   <TextForm heading="Enter the text to analyze"/>
   </div>
   
   
   </>
  );
}

export default App;
