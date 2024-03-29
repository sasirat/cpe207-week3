// console.log("Hello man");
// alert("this is alert");

let age = 30;
age = 31;
console.log("age : ",age);
console.log("age : "+30);
console.log(30+" cm");
age = '45';
console.log(age);
console.log(30 + '40');
let b = 1;
b++;
console.log(b);

const name = 'John';
const height = 178;
const weight = 68.5;
const isCool = true;
const x = null;
const y = undefined;
console.log(typeof y);

//string
console.log("My name is " + name);
console.log(`My name is also ${name}`); //String literal
const hello = `My name is again also ${name}`;
console.log(hello.length);
console.log(hello.toUpperCase());
console.log(hello.substring(3,10).toUpperCase());
console.log(hello.split(' '));

//Array
const nums = new Array(1,2,3,4,5,6);
console.log(nums);
const fruits = ['apple',"orange" , 10, true, 14.5,[1,2,3]];
console.log(fruits[5]);
fruits[6] = 'crazy';
console.log(fruits);
fruits.push('end');
console.log(fruits);
fruits.unshift('start');
console.log(fruits);
fruits.pop(); fruits.pop();
console.log(fruits);
console.log(Array.isArray(hello));
console.log(Array.isArray(fruits));//check array
console.log(fruits.indexOf('orange'));

//Object literal
const person = {
    fname: 'Dome',
    lname: 'dkjhg',
    Age: 40,
    Hobby: ['music', 'movie', 'sports'],
    adress:{
        street: "fjgi",
        city: "kfgn"
    }
}
console.log(person);
console.log(`${person.fname} (${person.Age})`);
console.log('A hobby:' + person.Hobby[1]);

const {fname,lname} = person;
console.log(fname + ' ' + lname);
const {adress: {city}} = person;
console.log(`${fname} ${lname} (${city})`);

person.email = 'jdhghesg';
console.log(person);

//Array of object
const todos = [
    {
        id:1,
        text: "jfhbjdbjsb",
        isCompleted: true
    
    },
    {
        id:2,
        text: "jfhbjdbjsb",
        isCompleted: false
    }
]
console.log(todos[1]);

//JSON format
const todosJSON = JSON.stringify(todos);
console.log(todosJSON);

//loop
let i = 10;
let str = '';
while(i>0){
    str += `${i} `;
    i--;
}
console.log(str);

for(let i=0; i<todos.length ; i++){
    console.log(`${i+1}.${todos[i].text}`);
}

for(let todo of todos){
    console.log(todo.id + '-' + todo.text);
}

//------High-order function--------
//used arrow function
// todos.forEach(function(todo,index) {
//     console.log(`${index+1}: ${todo.text}`);
// })
todos.forEach((todo,index) => {
    console.log(`${index+1}: ${todo.text}`);
})

// const todoText = todos.map(function(todo){
//     return todo.text;
// })
// console.log(todoText);
const todoText = todos.map(todo => todo.text)
console.log(todoText);

const todoComplete = todos.filter(function(todo){
    return todo.isCompleted === true;
})
console.log(todoComplete);

let abc = 40
console.log(abc === '40');
console.log(abc == '40');

let b1;
const c1 = (b1 === undefined)? 0:b1;
console.log(c1);

function AddNums(num1=0,num2=0){
    return num1+num2;
}
console.log(AddNums(5,10));

// const addNums2 = (num1,num2) => {return num1+num2};
const addNums2 = (num1,num2) => num1+num2;
console.log(addNums2(10,20));

//OOp
function Person(fname,lname,dob){
    this.fname = fname;
    this.lname = lname;
    // this.dob = dob;
    this.dob = (dob == undefined)? new Date():Date(dob);

    this.getBirthYear = function() {return this.dob.getfullyear();}
    this.getfullname = function(){
        return `${this.fanme} ${this.lname}`
    }
}

const p1 = new Person('John','Doe','123');
console.log(p1);
console.log(p1.getfullname() + ' ' + p1.getBirthYear);

class PersonC {
    constructor(firstname,lastname,dob){
        this.fnmae = firstname;
        this.lname = lastname;
        this.dob = (dob === undefined)? new Date():new Date(dob);
    }
    getBirthYear = function() {
        return this.dob.getfullyear();}
    getfullname = function(){
        return `${this.fanme} ${this.lname}`
    }
}
const p2 = new PersonC('Jone','dgh','fbhd');
console.log(p2);

//DOM - Document Object Model
// console.log(window.alert());
console.log(window.document);
const form = document.getElementById('my-form');
console.log(form);

const container = document.querySelector('h1');
console.log(container);

container.innerHTML = 'pop'

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#user');
myForm.addEventListener('submit',onSubmit);
function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value + ' ' + emailInput.value);
    if(nameInput.value === '' || emailInput === ''){
        //alert('Please enter all filed');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    }else{
    const li = document.createElement('li');
    const text = document.createTextNode(`${nameInput.value}:${emailInput.value}`);
    li.appendChild(text);
    console.log(li);
    userList.appendChild(li);

    nameInput.value = '';
    emailInput.value = '';
    }
}