import { useEffect, useState } from "react";

export default function Bmi() {

  const [berat, setBerat] = useState(0);
  const [tinggi, setTinggi] = useState(0);
  const [result, setResult] = useState("");

  function Hitung() {
    const t = tinggi / 100;
    const BMI = berat / Math.pow(t, 2);

    console.log(`Berat: ${berat}`)
    console.log(`Tinggi: ${tinggi}`)

    try {
      if (BMI < 18.5) {
        console.log("Kekurangan berat badan");
        setResult("Kekurangan berat badan");
      } else if (BMI < 24.9) {
        console.log("Normal");
        setResult("Normal");
      } else if (BMI < 29.9) {
        console.log("Kelebihan berat badan");
        setResult("Kelebihan berat badan");
      } else if (BMI >= 30) {
        console.log("Obesitas");
        setResult("Obesitas");
      } else {
        console.log(`BMI ${BMI}`)
      }
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="wrapper">
        <div className="header">
          <h2>Kalkulator BMI</h2>
        </div>
        <div className="wrapper2">
          <div className="input">
            <input
              placeholder="Berat Badan (kg)"
              onChange={(e) => setBerat(e.target.value)}
              className="input-text"
              type="number"
            />
            <input
              placeholder="Tinggi Badan (cm)"
              onChange={(e) => setTinggi(e.target.value)}
              className="input-text"
              type="number"
            />

            <button className="button">
              <p className="text" onClick={() => Hitung()}>
                Hitung BMI
              </p>
            </button>
          </div>

          <div className="hasil" id="hasil">
            {result}
          </div>
        </div>
      </div>
    </>
  );
}
