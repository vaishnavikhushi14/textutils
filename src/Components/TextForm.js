import React,{ useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        console.log("UpperCase was clicked" + Text);
        let newtext = Text.toUpperCase(); 
        setText(newtext);
        props.showAlert("Text in Upper case","success");
    }
    const handleLoClick = () =>{
        console.log("UpperCase was clicked" + Text);
        let newtext = Text.toLowerCase(); 
        setText(newtext);
        props.showAlert("Text in Lower case","success");
    }
    const handleClearClick = () =>{
     
      let newtext = ''; 
      setText(newtext);
      props.showAlert("Text in Lower case","success");
  }

  const handleCopy =()=>{
    var text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);



}

const handleSpace = () =>{
  let text = Text.split(/[ ]+/);
  setText(text.join(" "));

  
}

    const hanldeOnChange = (event) =>{
        
        setText(event.target.value);
    }
    const [Text, setText] = useState('');
  return (
      <>

  <div className="container my-3" style={{color:props.mode ==='dark'?'white':'#395b78'}} >

<div className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
  <textarea className="form-control" value={Text} style={{backgroundColor :props.mode ==='dark'?'grey':'white',color:props.mode ==='dark'?'white':'#395b78'}} onChange ={hanldeOnChange} id="myBox" rows="8"></textarea>
</div> 
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lower case</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleSpace}>Remove Extra Space</button>
</div>
<div className="container my-3"style={{color:props.mode ==='dark'?'white':'#395b78'}}>
    <h1>Your Text Summary</h1>
    <p>{Text.split(" ").length} words and {Text.length} characters</p>
    <p>{0.08*Text.split(" ").length}</p>
    <h2>Preview</h2>
    <p>{Text.length>0?Text:"Enter Something to Prerview"}</p>
</div>
</>
  )
}
