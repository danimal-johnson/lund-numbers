import React, { useState, useEffect } from 'react'

const Months = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11
};
Object.freeze(Months);

// const months_en = ['January', 'February', 'March', 'April', 'May', 'June',
//   'July', 'August', 'September', 'October', 'November', 'December'];
const months_sv = ['Januari', 'Februari', 'Mars', 'April', 'May', 'Juni',
  'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];

const dates = [...Array(31).keys()];

export default function Form() {
  const [tel, setTel] = useState('');
  const [month, setMonth] = useState(Months.JAN);
  const [date, setDate] = useState(1);

  useEffect(() => {
    setTel(getNumber(date, month));
  }, [date, month]);

  const monthHandler = e => {
    e.preventDefault();
    setMonth(parseInt(e.target.value));
  }
  const dateHandler = e => {
    e.preventDefault();
    setDate(parseInt(e.target.value));
  }

  // TODO: Put both variables into one object & have only one change handler.
  // const changeHandler = e => {
  //   this.setState([e.target.name], e.target.value)
  // }

  return (
    <div className="Form">
      <h2>Ange din födelsdatum.</h2>
      <form>
        <label htmlFor='date'>Datum</label>
        <select value={date} name='date' onChange={dateHandler}>
        {dates.map(i => <option value={i+1}>{i+1}</option>)}
        </select>

        <label htmlFor='month'>Månad</label>
        <select value={month} name='month' onChange={monthHandler}>
        {Object.values(Months).map(i => <option value={i}>{months_sv[i]}</option>)}
        </select>
      </form>
      <p className="ring">Snälla ringer upp:</p>
      <h1 className="tel">{tel}</h1>
    </div>
  )
}

const getNumber = (d, m) => {
  if (d > 29 && m === Months.FEB) return 'Invalid date';
  if (d > 30) {
    if (m === Months.APR ||
        m === Months.JUN ||
        m === Months.SEP ||
        m === Months.NOV) return 'Invalid date';
  }
  switch (d) {
    case 1:
    case 3:
    case 4:
      return '046-359 77 91';
    case 2:
    case 26:
      return '046-359 62 44';
    case 5:
    case 8:
    case 18:
      return '046-359 62 04';
    case 6:
    case 7:
      return '046-359 61 93';
    case 9:
      return '046-359 62 46';
    case 10:
    case 19:
      return '046-359 96 72';
    case 11:
    case 14:
      return '046-359 79 68';
    case 12:
    case 20:
    case 22:
      return '046-359 63 89';
    case 25:
    case 27:
      return '046-359 62 42';
    case 16:
    case 17:
      return '046-359 83 45';
    case 21:
    case 23:
      return '046-359 56 87';
    case 28:
    case 29:
    case 30:
      return '046-359 63 83';
    case 15:
      return m < Months.JUL ? '046-359 62 44' : '046-359 96 72';
    case 24:
      return m < Months.JUL ? '046-359 83 45' : '046-359 62 46';
    case 31:
      return m < Months.JUL ? '046-359 62 46' : '046-359 56 87';
    case 13:
      return m < Months.JUL ? '046-359 62 42' : '046-359 79 68';
    default:
      return 'Number not found';
  }
}