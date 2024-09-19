import { useState } from 'react'
import './App.css'

function App() {
  const ageCalc = () => {



  let inputDay = Number(document.getElementById('day_inputed').value)
  let inputMonth = Number(document.getElementById('month_inputed').value)
  let inputYear = Number(document.getElementById('year_inputed').value)

  let todayDate = new Date();

  let currentday = todayDate.getDate()
  let currentmonth = todayDate.getMonth() + 1
  let currentyear = todayDate.getFullYear()

  let days, months, years;

  if ((inputDay == '') && (inputMonth == '') && (inputYear == '')) {
    document.getElementById('year_alert').innerHTML = 'This field is required'
    document.getElementById('month_alert').innerHTML = 'This field is required'
    document.getElementById('day_alert').innerHTML = 'This field is required'
    document.getElementById('year_inputed').style.borderColor = 'red'
    document.getElementById('month_inputed').style.borderColor = 'red'
    document.getElementById('day_inputed').style.borderColor = 'red'
  } else if ((inputDay > currentday) && (inputMonth >= currentmonth) && (inputYear >= currentyear)) {
    document.getElementById('year_alert').innerHTML = 'Invalid Date'
    document.getElementById('day_alert').innerHTML = ''
    document.getElementById('month_alert').innerHTML = ''
    document.getElementById('year_inputed').style.borderColor = 'red'
    document.getElementById('month_inputed').style.borderColor = 'red'
    document.getElementById('day_inputed').style.borderColor = 'red'
  } else {

    if (inputYear == '') {
      document.getElementById('year_alert').innerHTML = 'This field is required'
      document.getElementById('year_inputed').style.borderColor = 'red'
    } else if (inputYear > currentyear) {
      document.getElementById('year_alert').innerHTML = 'Invalid Year'
      document.getElementById('year_inputed').style.borderColor = 'red'

    } else {
      document.getElementById('year_alert').innerHTML = ''
      document.getElementById('year_inputed').style.borderColor = 'hsl(0, 1%, 44%)'
      years = currentyear - inputYear
    }

    if ((inputMonth > 12) || (inputMonth <= 0)) {
      document.getElementById('month_alert').innerHTML = 'Invalid Month'
      document.getElementById('month_inputed').style.borderColor = 'red'
    } else if (inputMonth == '') {
      document.getElementById('month_alert').innerHTML = 'This field is required';
      document.getElementById('month_inputed').style.borderColor = 'red'
    } else if (currentmonth >= inputMonth) {
      document.getElementById('month_alert').innerHTML = '';
      document.getElementById('month_inputed').style.borderColor = 'hsl(0, 1%, 44%)'
      months = currentmonth - inputMonth
    } else {
      years--
      months = 12 + currentmonth - inputMonth
    }

    if ((inputDay > 31) || (inputDay <= 0)) {
      document.getElementById('day_alert').innerHTML = 'Invalid Day'
      document.getElementById('day_inputed').style.borderColor = 'red'
    } else if (inputDay == '') {
      document.getElementById('day_alert').innerHTML = 'This field is required'
      document.getElementById('day_inputed').style.borderColor = 'red'
    } else if (currentday >= inputDay) {
      document.getElementById('day_alert').innerHTML = ''
      document.getElementById('day_inputed').style.borderColor = 'hsl(0, 1%, 44%)'
      days = currentday - inputDay
    } else {
      const daysInMonth = (year, month) => {
        return new Date(year, month, 0).getDate()
      }
      document.getElementById('day_alert').innerHTML = ''
      document.getElementById('day_inputed').style.borderColor = 'hsl(0, 1%, 44%)'
      months--
      days = daysInMonth(inputYear, inputMonth) + currentday - inputDay
    }

    if (months < 0) {
      months = 11
      years--
    }
  }

  if ((isNaN(years)) || (years == undefined) || (isNaN(days)) || (days == undefined) || (isNaN(months)) || (months == undefined)) {
    console.log(years, months, days);
    document.getElementById('number_of_years').innerHTML = '--'
    document.getElementById('number_of_months').innerHTML = '--'
    document.getElementById('number_of_days').innerHTML = '--'
  } else {
    console.log(years, months, days);
    document.getElementById('number_of_years').innerHTML = `${years}`
    document.getElementById('number_of_months').innerHTML = `${months}`
    document.getElementById('number_of_days').innerHTML = `${days}`
  }


  }

  return (
    <>
  <main>
    <section id="input_section">
      <div>
        <p>DAY</p>
        <input type="text" name="" id="day_inputed" placeholder="DD" minLength="1" maxLength="2"/>
        <em id="day_alert"></em>
      </div>
      <div>
        <p>MONTH</p>
        <input type="text" name="" id="month_inputed" placeholder="MM" minLength="1" maxLength="2"/>
        <em id="month_alert"></em>
      </div>
      <div>
        <p>YEAR</p>
        <input type="text" name="" id="year_inputed" placeholder="YYYY" minLength="4" maxLength="4"/>
        <em id="year_alert"></em>
      </div>
    </section>

    <div id="arrow_section">
      <div id="hr"></div>
      <img alt="" id="arrow_picture"/>
    </div>

    <button onClick={()=>ageCalc()}>Check Age</button>

    <section id="display">
      <h2><span className="numbers" id="number_of_years">--</span> years</h2>
      <h2><span className="numbers" id="number_of_months">--</span> months</h2>
      <h2><span className="numbers" id="number_of_days">--</span> days</h2>
    </section>

  </main>
    </>
  )
}

export default App
