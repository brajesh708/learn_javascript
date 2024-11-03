const name= "brajesh"
const repoCount = 50

console.log(name + repoCount + "value"); //this is old formet
console.log(`Hello my name is ${name} and my repo cout is ${repoCount}`); // this is new formet

const gameNmae = newNmae = "brajesh mewada"
console.log(gameNmae);
console.log(gameNmae[1]);
console.log(gameNmae.__proto__);
console.log(gameNmae.length);
console.log(gameNmae.toUpperCase());
console.log(gameNmae.charAt(2));
console.log(gameNmae.indexOf('h'));




//  string ke method console.log se jakar pade 


const newString = gameNmae.substring(2,5)
console.log(newString);
console.log(gameNmae.slice(2,5)); //slice method use karega
console.log(gameNmae.slice(-3)); // -3 se last 3 char use kare
console.log(gameNmae.slice(2,-3)); // 2 se last 3 char use
console.log(gameNmae.slice(2,5,7)); // error



// const new2String = gameNmae.substring(0,5)
// console.log(new2String);

// const anotherString = gameNmae.slice(-8,2)
// console.log(anotherString);

// const newStringOne = "   Brajesh  "
// console.log(newStringOne)
// console.log(newStringOne.trim()) // trim funtion space hata deta he

// console.log(newStringOne.trimStart()) // trimStart funtion left side space hata deta
// console.log(newStringOne.trimEnd()) // trimEnd funtion right side space hata deta

const url = "https://brajesh.com/brajesh%20mewada"
console.log(url.replace('%20', '_'))


console.log(url.includes('sunder'))  // url ke ander sunder he ya nahi == false
console.log(url.includes('brajesh'))  // url ke ander brajesh he ya nahi == true








