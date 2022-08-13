
import './App.css';
//import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React,{ useState } from 'react'
import Alert from './Components/Alert';
//import {BrowserRouter as Router, Route, Routes,  Link } from 'react-router-dom'


function App() {

 const [alert,setAlert] = useState(null);

 const showAlert = (message, type)=>{
   setAlert  ({
     msg : message,
     type : type

     


   })
   setTimeout (()=>{

    setAlert(null);

  },1500);


 }


  const toggleMode =()=>{
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor ="#395b78";
      showAlert('Dark Mode Enabled','success');
      document.title = "TextUtils - Dark Mode";
   
    }
    else{
      setMode('light');
      document.body.style.backgroundColor ="white";
      showAlert('Light Mode Enabled','success');
      document.title = "TextUtils - Light Mode";
    }
  



  }



  const [Mode, setMode] = useState('light')
  return (
    <>    {/* <Router>*/}
 <Navbar title = "TextUtils" mode ={Mode} toggleMode={toggleMode}></Navbar>
 <Alert alert ={alert}></Alert>
 {/*<div className="container">
      <Routes>
        <Route exact path="/About" element={<About />}></Route>
        <Route
          exact
          path="/"
  element={*/}
            <TextForm heading="Enter text" mode={Mode} />
          {/*}
        ></Route>
      </Routes>
    </div>
  </Router>*/}
  



    </>
  );
  }

export default App;
