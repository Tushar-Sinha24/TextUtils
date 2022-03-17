import React , {useState}from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("click"+text)
       let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnChange=(event)=>{
        // console.log("change")
        setText(event.target.value);
    }
    const[text, setText]=useState("Enter text here...")
  return (
    <div>
        <div className="mb-3 my-5">
            <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick} >Convert to UpperCase</button>
        
    </div>
  )
}
