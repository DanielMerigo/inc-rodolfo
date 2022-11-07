//Split a list of children by male and female

const childrens = [
    { name: "Joey", sex: "Male", age: 14 },
    { name: "Monica", sex: "Female", age: 8 },
    { name: "Rachael", sex: "Female", age: 5 },
    { name: "Chandler", sex: "Male", age: 7 },
    { name: "Ross", sex: "Male", age: 10 },
    { name: "Phoebe", sex: "Female", age: 3 },
    { name: "Daniel", sex: "Male", age: 21 },
    { name: "Angela", sex: "Female", age: 11 }
];
//filter() Filtra os dados com base na função
const sexMale = childrens.filter(obj => { return obj.sex === "Male" }) //Filtra por masculino
const sexFemale = childrens.filter(obj =>  { return obj.sex == "Female" }) //Filtra por masculino

console.log(`Os filhos meninos são: \n`, sexMale)
console.log(`E as filhas meninas são: \n`, sexFemale)


//Exemplo de function FIND()  Procura por um dado especifico na Array
const findRoss = childrens.find(obj => {return obj.name === 'Ross'});
// console.log(findRoss) //OUTPUT

//Exemplo de funcion MAP()  Coloca o resultado da verificação dentro de uma nova array
const ageofBirth = childrens.map(obj => { return 2022 - obj.age }) //Filtra por masculino
// console.log(`As datas de nascimento são : \n`, ageofBirth) //OUTPUT


