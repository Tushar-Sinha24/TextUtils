
import './App.css';
import About from './Component/about';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';

function App() {
  return (
   <>
    
   <Navbar title="TextUtils"/>

   <div className="container">
   {/* <TextForm heading="Enter the text to analyze"/> */}
   <About></About>
   </div>
   
   
   </>
  );
}

export default App;
