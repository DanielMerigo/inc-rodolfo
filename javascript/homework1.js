//Split a list of children by male and female

var nome = 'Juliano';
let idade = 18;
const nascimento = 18;

const clientes0 = { nome: 'Juliano', idade: 23, sexo: 'Masculino' }

const clientes1 = {
    nome: 'Daniel',
    idade: 21,
    sexo: 'Masculino'
}
                //0   //1   //2    //3
const garagem = [14, 'nome', 91, 'Juliano']

const clientes = [
    {nome: 'Juliano', idade: 23, sexo:'Masculino'}, //0
    {nome: 'Daniel', idade: 21, sexo: 'Masculino'}, //1
    {nome: 'Ana', idade: 25, sexo: 'Feminino'},     //2
    {nome: 'Julia', idade: 15, sexo: 'Feminino'},     //2
    {nome: 'Pedro', idade: 20, sexo: 'Masculino'},     //2
    {nome: 'Jesus', idade: 19, sexo: 'Masculino'},     //2
    {nome: 'Kadmiel', idade: 19, sexo: 'Masculino'}     //2

]

console.log(clientes[2]);



const childrens = [
    { name: "Joey", sex: "Male", age: 14 },
    { name: "Monica", sex: "Female", age: 8 },
    { name: "Rachael", sex: "Female", age: 5 },
    { name: "Chandler", sex: "Male", age: 7 },
    { name: "Ross", sex: "Male", age: 10 },
    { name: "Phoebe", sex: "Female", age: 3 },
    { name: "Daniel", sex: "Male", age: 21 },
    { name: "Angela", sex: "Female", age: 11 },
    { name: "Ana", sex: "Female", age: 10}
];


//filter() Filtra os dados com base na função
const sexMale = childrens.filter(obj => { return obj.sex === "Male" }) //Filtra por Masculino
const sexFemale = childrens.filter(obj =>  { return obj.sex == "Female" }) //Filtra por Feminino

console.log(`Os filhos meninos são: \n`, sexMale)
console.log(`E as filhas meninas são: \n`, sexFemale)


//Exemplo de function FIND()  Procura por um dado especifico na Array
const findRoss = childrens.find(obj => {return obj.name === 'Ross'});
// console.log(findRoss) //OUTPUT

//Exemplo de funcion MAP()  Coloca o resultado da verificação dentro de uma nova array
const ageofBirth = childrens.map(obj =>  { return 2022 - obj.age }) //Filtra por masculino
// console.log(`As datas de nascimento são : \n`, ageofBirth) //OUTPUT

//Exemplo da function reduce(), soma todos os numeros selecionados na array ou no objeto da array
const totalAges = childrens.reduce((previous, atual) => previous + atual.age, 0) //O Número no fim é o inicio do valor da variavel
//console.log(totalAges)  //OUTPUT

