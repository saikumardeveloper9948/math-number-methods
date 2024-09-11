




// [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()


let a=[12.345, 67.890, 34.567]

let b=a.map(a=>a.toFixed(2))
    console.log(b)



// for (b of a){
//     let arr=[]
//     arr=arr+a+" "
//        arr =b.toFixed(2)
       
//     console.log(arr)
// }
// // 
// console.log(b)


// ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()

let c=['123abc', '456def', '789ghi']
let d=c.map(a=>parseInt(a))
console.log(d)


// [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()

let e=[12, 34.56, 78, 90.12]
let f=e.map(a=>Number.isInteger(a))
console.log(f)


// ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()

let g=['abc', 123, 'def', 456]
let h=g.map(a=>isNaN(a))
console.log(h)



// [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()

let i=[123.456, 789.012, 345.678]

let j=i.map(a =>a.toPrecision(4))

console.log(j)



function otp() {
    let a = Math.floor(Math.random() * (99999 - 10000) + 10000);
    let head1 = document.getElementsByTagName("h1");
    let x = Math.floor(Math.random() * (900000 - 100000) + 100000);
    head1[0].style.color=`#${x}`;
    head1[0].innerHTML = a;
  }