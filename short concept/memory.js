// memory 2 type ki hoti he 
// stack(premitive) , Heap(non- primitive)
// stack memory ki allocation aur deallocation fast hoti he
// heap memory ki allocation aur deallocation slow hoti he
// stack memory ki size fixed hoti he
// heap memory ki size dynamic hoti he
// stack memory ki allocation time constant hoti he
// heap memory ki allocation time variable hoti he
// stack memory ki deallocation time constant hoti he
// heap memory ki deallocation time variable hoti he
// stack memory ki use karna jaruri hota he
// heap memory ki use karna jaruri nahi hota he

// let myname='brajesh'
// anothername='raj rajput'

console.log(myname);
console.log(anothername);


let userOne ={
    name:'brajesh',
    age:25,

}

let userTwo = userOne
console.log(userOne);
console.log(userTwo);

//  this is heap example 
//  heap me orignal velue me hi chenge hota he 
// let userOne ={
//     name:'brajesh',
//     age:25,

// }
// let userTwo = userOne
userTwo.name='raj rajput'
console.log(userOne);
console.log(userTwo);
// end  heap example 