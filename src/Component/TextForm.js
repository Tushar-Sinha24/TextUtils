import React , {useState} from 'react'

export default function TextForm(props) {

  

    const handleUpClick=()=>{
        
       let newText=text.toUpperCase();
        setText(newText);
        // console.log("click"+newText)
        props.showAlert("Converted text to upper case","Success");
    }

    const handleLoClick=()=>{
        // console.log("click"+text)
       let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted text to lower case","Success");
    }

    const removeExtraSpace=()=>{
        // console.log("click"+text)
        let newText=text.replace(/\s+/g,' ');
        setText(newText);
        props.showAlert("Extra Spaces Removed","Success");
    }

    const titleCase=()=>{
        // console.log("click"+text)
      
       let newText=text.replace(
        /\w\S*/g,
        function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
      );
        setText(newText);
        props.showAlert("Converted text to tittle case","Success");
    }

    const clearText=()=>{
      let newText='';
      setText(newText);
      props.showAlert("Text has been cleared","Success");
    }

    const copyText=()=>{
      var text =document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)

      props.showAlert("Text has been Copied","Success");

    }
    

    const handleOnChange=(event)=>{
      // console.log("change")
      setText(event.target.value);
      
      
  }
  const[text, setText]=useState("")

   
  return (
    <>
    <div className={`container text-${props.mode==='light'? 'dark':'light'} `}>
        
      <div className='mb-3 my-5 ' >
        <h1>{props.heading}</h1>
        
        <textarea className={`form-control bg-${props.mode} text-${props.mode==='light'? 'dark':'white'}`} value={text} placeholder='Enter text here...' onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>

      <div className="container2 border border-dark mb-3 pt-2  ps-2 ">
        <p className=''>{text.trim().split(/\s+/g).length} Words and {text.length} Charachter</p>
        <p>{(text.length*0.0032).toFixed(2)}  Minutes read</p>
      </div>

        <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={titleCase} >Title Case</button>
        <button className='btn btn-primary mx-2' onClick={removeExtraSpace} >Remove extra spaces</button>
        <button className='btn btn-primary mx-2' onClick={clearText} >Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={copyText} >Copy Text</button>

    </div>

    <div className={`container my-4 text-${props.mode==='light'? 'dark':'white'}`}>
    <h2>Preview</h2>
    <div >
    <p className={`border border-${props.mode==='light'? 'dark':'secondary '} p-2`}>{text.length>0? text:"No text in text Area."}</p>
    </div>
    </div>
    
    </>

   
  )
}
