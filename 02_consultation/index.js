const student = {
    age:22,
    name:"Вася"
}

const age = 35;


const fruits = ['apple','orange','mango'];
const fruits1 = ['potatoe','tomato','cucumber'];
const joinFruitsAndFruits1 = [...fruits,'flower',... fruits1]
console.log(joinFruitsAndFruits1);


const brothers = [
    {race:"hobbit", height: 110, age:45, name:"Frodo Baggins"},
    {race:"human", height: 185, age:46, name:"Aragorn"},
    {race:"elf", height: 189, age:110, name:"Legolas"},
    {race:"dworf", height: 140, age:150, name:"Gimly"},
    {race:"human", height: 195, age:200, name:"Gandalf"},
];
// const frodo = brothers[0];
// console.log(frodo);

const [fr, aragorn, legolas, gimly, gandalf]= brothers;

console.log(gimly);

const ageOfFrodo = fr.age // достали по ключу
console.log();

const user = {id:1, email:"user@example.com", login:"Admin"}
const {email, id, login} = user

console.log(email)

// Пример 2 - ключ может состоять из двух слов
// Если ключ имеет пробелы - его нужно обернуть в кавычки


const product = {
    title: "Iphone",
    price:2000,
    "model of phone": "XR"
}
// Получить значение по ключу

console.log(product.price);
console.log(product["model of phone"]);

// Положить значение по ключу
product.diagonal = 6.5;
product['type of adapter'] = "USB-C";
console.log(product);

// Class
class Animal{
    constructor(age, name, color){
        this.age = age;
        this.name = name;
        this.color = color;
    }
    info(){
        console.log(`Меня зовут ${this.name} Возраст: ${this.age} Цвет: ${this.color}`);
    }
}
const panda = new Animal(14,"po","black")
panda.info();

class Bird extends Animal {
    constructor(age, name, color,heightOfFlight,ration ){
        super(age, name, color);
        this.heightOfFlight = heightOfFlight;
        this.ration = ration;
    }
}
//Пример 4 
//Допустим у нас были переменные - и мы хотим создать из них объект


const title = "Titanic";
const capacity = 1500;
const  titanic = {title,capacity};
console.log(titanic);

// Пример 5 

const name1 = "Avrora";
const cap = 300;
// хочу создать объект из этих переменных,но с другими названиями ключей
const avrora = {title:name1, capacity:cap}
console.log(avrora);





