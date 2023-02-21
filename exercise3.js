//dengan menggunakan modul, buatlah 2 fungsi
//1. Export (mengonversi suhu dari farenheit ke celcius, tampilkan dengan contoh format: 99.20 Farenheit = 37.33 celcius)
// rumus = (input) -32 /1.8
export let hasil = "Fahrenheit =" +
"Celcius"

function fToC (fahreinheit) {
    var fTemp = farenheit;
    var fToC = fTemp - 32/1.8;
    var message = `${fTemp} Fahreinheit = ${fToC}`
}

//2. Export default
//menghitung BMI (Body Mass Index)
// rumus: BMI = berat/tinggi*tinggi), bertat dalam kg dan tinggi dalam meter


import React, { useState } from "react";
import style from './BMI.module.css';
import Calculator from './Calculator'
import Result from './Result'



function BMI() {
    const [page, setPage] = useState(0);

    const checkPage = () => {
        if (page === 0) {
            return (
                <button className={`${style.button}`}
                    disabled={page === 1}
                    onClick={() => {
                        setPage((currPage) => currPage + 1);
                    }}>Calculate</button>
            )
        } else {
            return (
                <button className={`${style.button}`} disabled={page === 0} onClick={() => {
                    setPage((currPage) => currPage - 1);
                }}>Back</button>
            )
        }
    }

    const PageDisplay = () => {
        if (page === 0) {
            return <Calculator />;
        } else {
            return <Result />;
        }
    };

    return (
        <div className={`${style.wrapper}`}>
            <div className={`${style.box}`}>
                <div className={`${style.img}`}></div>
                <div className={`${style.topSection}`}>
                    <h1 className={`${style.title}`}>{(page === 0 ? 'BMI Calculator' : 'Result')}</h1>
                </div>
                <div className="body">{PageDisplay()}</div>
                <div>{checkPage()}</div>
            </div>
        </div>
    )
}


import React, { useState } from "react";
import style from './Calculator.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';

const Input = ({ label, id, handleChange, name, type, placeholder }) => (
  <>
    <label className={`${style.label}`} htmlFor={id}>{label}</label>
    <input className={`${style.input}`} type={type || "number"} id={id} name={name || id} placeholder={placeholder} onChange={(e) => handleChange(e.target.value)}></input>
    <br />
  </>
);

function Calculator() {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)

  function removeSelected() {
    const selectedBox = document.querySelectorAll('#head')
    console.log(selectedBox.classList)
    selectedBox.forEach(item => {
      item.classList.remove(`${style.activeBox}`)
    })
  }

  const handleToggle = (e) => {
    if (!e.currentTarget.className.includes("activeBox")) {
      removeSelected()
      e.target.classList.add(`${style.activeBox}`)
    } else {
      e.target.classList.remove(`${style.activeBox}`)
    }
  };


  return (
    <>
      <div className={`${style.content}`}>
        <div className={`${style.middleSection}`}>
          <h3 className={`${style.formTitle}`}>Choose your gender</h3>
          <div className={`${style.genders}`}>
            <div id="head" onClick={handleToggle} className={`${style.genderBox}`}>
              <FontAwesomeIcon icon={faMars} className={`${style.genderIcon}`} />
              <h3 className={`${style.genderBoxTitle}`}>Male</h3>
            </div>
            <div id="head" onClick={handleToggle} className={`${style.genderBox}`}>
              <FontAwesomeIcon icon={faVenus} className={`${style.genderIcon}`} />
              <h3 className={`${style.genderBoxTitle}`}>Female</h3>
            </div>
          </div>
        </div>
        <div className={`${style.bottomSection}`}>
          <Input handleChange={setWeight} placeholder='Weight' label='Your weight (kg)'>{weight}</Input>
          <Input handleChange={setHeight} placeholder='Height' label='Your height (cm)'>{height}</Input>
          <Input handleChange={setAge} placeholder='Age' label='Your age'>{age}</Input>
        </div>
      </div>
    </>
  )
}


import React, { useState } from 'react'
import style from './Result.module.css'


function Result() {
  const [bmiScore, setBmiScore] = useState(0)
  const [bmiDesc, setBmiDesc] = useState('')


  return (
    <div className={`${style.content}`}>
      <div className={`${style.img}`}></div>
      <div className={`${style.descriptions}`}>
        <p className={`${style.bmiScoreDesc}`}>Your BMI is <span className={`${style.bmiScoreNumber}`}>{bmiScore}</span>, indication your weight is in the <span className={`${style.bmiScoreDesc}`}>{bmiDesc}</span> category for adults of your height</p>
        <p className={`${style.descriptionBottom}`}>Maintaining a healthy weight may reduce the risk of chronic diseases associated with overweight and obesity.</p>
      </div>
    </div>
  )
}



export default Result