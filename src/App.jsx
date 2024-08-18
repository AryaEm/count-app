import { useState } from "react";
import "./App.css";

import Bmi from "./components/bmi";

function App() {
  const [currectDisplay, setCurrentDisplay] = useState("bmi");

  return (
    <>
      <div className="navbar">
        <div className="nav-wrap">
          <a href="#" onClick={() => setCurrentDisplay('bmi')} >Kalkulator BMI</a>
          <a href="#" onClick={() => setCurrentDisplay('hargatanah')} >Harga tanah</a>
          <a href="#" onClick={() => setCurrentDisplay('hargabarang')} >Harga Barang</a>
          <a href="#" onClick={() => setCurrentDisplay('geometri')} >Deret Geometri</a>
          <a href="#" onClick={() => setCurrentDisplay('vnl')} >Volume dan Luas</a>
        </div>
      </div>

      <div className="container">

        { currectDisplay === 'bmi' && (<Bmi></Bmi>)}
        
      </div>

      <div className="wm">
        <p>
          By{" "}
          <a href="https://github.com/AryaEm/" target="_blank">
            Arya
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
