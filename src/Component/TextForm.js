import React , {useState} from 'react'

export default function TextForm(props) {

  

    const handleUpClick=()=>{
        
       let newText=text.toUpperCase();
        setText(newText);
        console.log("click"+newText)
    }

    const handleLoClick=()=>{
        // console.log("click"+text)
       let newText=text.toLowerCase();
        setText(newText);
    }

    const removeExtraSpace=()=>{
        // console.log("click"+text)
        let newText=text.replace(/\s+/g,' ');

        setText(newText);
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
    }

    const clearText=()=>{
      let newText='';
      setText(newText);
    }

    const copyText=()=>{
      var text =document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value)


    }
    

    const handleOnChange=(event)=>{
      console.log("change")
      setText(event.target.value);
      
      
  }
  const[text, setText]=useState("")

   
  return (
    <>
    <div className={`container text-${props.mode==='light'? 'dark':'light'} `}>
        
      <div className='mb-3 my-5 ' >
        <h1>{props.heading}</h1>
        
        <textarea className="form-control" value={text} placeholder='Enter text here...' onChange={handleOnChange} id="myBox" rows="10"></textarea>
      </div>

      <div className="container2 border border-dark mb-3 pt-2  ps-2">
        <p className=''>{text.trim().split(/\s+/g).length} Words and {text.length} Charachter</p>
      </div>

        <button className='btn btn-primary mx-2' onClick={handleUpClick} >Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick} >Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={titleCase} >Title Case</button>
        <button className='btn btn-primary mx-2' onClick={removeExtraSpace} >Remove extra spaces</button>
        <button className='btn btn-primary mx-2' onClick={clearText} >Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={copyText} >Copy Text</button>

    </div>
    
    </>

   
  )
}
