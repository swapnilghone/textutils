import './App.css';
import React, {useEffect, useState} from 'react';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Footer from './components/Footer';

function App() {
  const [mode,setMode] = useState("dark");
  const [alert,setAlert] = useState(null);

  useEffect(() => {
    document.body.style.backgroundColor = "#495057";
  },[])
  const showAlert = (message,type = 'success') => {
    setAlert({
      message:message,
      type:type
    });

    setTimeout(()=>{
      setAlert(null);
    },1000)
  }
  const toggleMode = () =>{
      if(mode === "dark"){
        setMode("light");
        document.body.style.backgroundColor = "white";
      }else{
        setMode("dark");
        document.body.style.backgroundColor = "#495057";
      }
  }
  return (
      <>
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="main-wrap container my-5">
            <Form mode={mode} showAlert={showAlert}/>
          </div>
          <Footer mode={mode}/>
      </>
  );
}

export default App;