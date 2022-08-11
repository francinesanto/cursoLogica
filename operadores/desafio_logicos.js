//Duas expressoes resultando em True(aritmeticos, relacionais, logicos)
let ver1 = 8
let ver2 = 1

let exp1 = ver1 + ver2 === ver2 + ver1 && ver1 > ver2
console.log(exp1)  
let exp2 = ver1 - ver2 === 7 || ver2 < ver1
console.log(exp2)

//Duas expressoes resultando em False(aritmeticos, realcionais, logicos)
let exp3 = ver1 * ver2 !== 8 && 15 === '15'
console.log(exp3)
let exp4 = ver1 / ver2 === 0 || 0 !== 0
console.log(exp4)
