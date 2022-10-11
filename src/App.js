
import './App.css';

import Footer from './components/footer';
import Header from './components/header';
import {About}  from './components/About';
import { UnitConvForm } from './components/unitconvform';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [result,setResult]=useState();
  let convert=(amount,from,to)=>{
    if(from===to){
      setResult(amount);
    }
    else{
      // mm to all
      if(from==='mm'){
        if(to==='cm'){  
          setResult(amount/10);
        }
        else if(to==='in'){
          setResult(amount/25.4);
        }
        else if(to==='ft'){
          setResult(304.8);
        }
        else if(to==='m'){
          setResult(amount/1000);
        }
        else if(to==='km'){
          setResult(amount/1000000);
        }
    }
      // cm to all
      else if(from==='cm'){
        if(to==='mm'){
          setResult(result*10);
        }
        else if(to==='in'){
          setResult(amount/2.54);
        }
        else if(to==='ft'){
          setResult(30.48);
        }
        else if(to==='m'){
          setResult(amount/100);
        }
        else if(to==='km'){
          setResult(amount/100000);
        }
      }
    // in to all
    else if(from==='in'){
      if(to==='mm'){
        setResult(result*25.4);
      }
      else if(to==='cm'){
        setResult(amount*2.54);
      }
      else if(to==='ft'){
        setResult(amount/12);
      }
      else if(to==='m'){
        setResult(amount/39.37000);
      }
      else if(to==='km'){
        setResult(amount/39370.0787);
      }
    }
    //  ft to all
    else if(from==='ft'){
      if(to==='mm'){
        setResult(result*304.8);
      }
      else if(to==='cm'){
        setResult(amount*30.48);
      }
      else if(to==='in'){
        setResult(amount*12);
      }
      else if(to==='m'){
        setResult(amount/3.2808399);
      }
      else if(to==='km'){
        setResult(amount/3280.8399);
      }
    }

    // m to all
    else if(from==='m'){
      if(to==='mm'){
        setResult(result*1000);
      }
      else if(to==='cm'){
        setResult(amount*100);
      }
      else if(to==='in'){
        setResult(amount* 39.3700787);
      }
      else if(to==='ft'){
        setResult(amount*3.2808399);
      }
      else if(to==='km'){
        setResult(amount/1000);
      }
    }

    else if(from==='km'){
      if(to==='mm'){
        setResult(result*1000000);
      }
      else if(to==='cm'){
        setResult(amount*100000);
      }
      else if(to==='in'){
        setResult(amount* 39370.0787);
      }
      else if(to==='ft'){
        setResult(amount* 3280.8399);
      }
      else if(to==='m'){
        setResult(amount*1000);
      }
    }
  }

  }
  
  return (
    <div className="App">
      
      <Router>
        <Header title="Unit Converter" searchBar={true}/>
      <Routes>
          <Route path="about" element={<About/>} />
          
        <Route path="/" element={<><UnitConvForm convert={convert} result={result} setResult={setResult}/> 
            </>
      }>
         
        </Route>
      </Routes>
      
      
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
