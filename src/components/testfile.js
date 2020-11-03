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

let myMonth = Months.APR;
console.log('myMonth', myMonth);

// months_sv.forEach(i => console.log(months_sv.indexOf(i) + ':' + i));
// Object.values(Months).forEach(i => console.log(i + ':' + months_sv[i]));
Object.values(Months).forEach(i => {
  console.log( `<option value="${i}">${months_sv[i]}</option>`);
})

Array.from(Array(20).keys()); //?
[...Array(31).keys()].forEach(i => console.log( `<option value="${i+1}">${i+1}</option>`));

