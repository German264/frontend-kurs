//! Задание 1
//! Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". 
//! Создайте массив с возрастами: 22, 31, 45, 53. 
//! Создайте новый массив, заполнив его элементами в   формате "имя возраст лет/годов".

let names = ["Мария ", "Алексей ", "Елена ", "Дмитрий "]
let ages = [22, 31, 45, 53]

let newArray = [
    names[0]+ages[0]+" года",
    names[1]+ages[1]+" год",
    names[2]+ages[2]+" лет",
    names[3]+ages[3]+" года",
]

console.log(newArray)

//! Задание 2
//! Используя методы массива, получите из этого массива новый массив, в котором элементы идут в обратной последовательности.

// Создаем новый массив в обратной последовательности
let reversedNewArray = [...newArray].reverse(); // Копируем массив и переворачиваем

console.log(reversedNewArray)
console.log(newArray)

//! Задание 3
//! Создайте пустой массив countries. 
//! Добавьте в массив следующие страны: "Франция", "Германия", "Италия". 
//! Удалите последний элемент из массива и сохраните значение в переменной. 
//! Добавьте его в начало массива. Выведите countries в консоль.

let countries = [];

countries.push("Франция", "Германия", "Италия")
console.log(countries)

let lastCountries = countries.pop("Италия")
console.log(lastCountries)

countries.unshift("Италия")
console.log(countries)

//! Задание 4
//! Создайте массив с числами 1, 2, 3, 4, 5. 
//! Используя цикл for:
//! Умножьте каждый элемент на 2 и выведите результат в консоль.
//! Создайте новый массив, где каждый элемент будет равен квадрату элемента из исходного массива.
//! Выведите оба массива (исходный и новый) в консоль.

let arr = [1, 2, 3, 4, 5]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]*2);
}

let arrSquare = []
for (let i = 0; i < arr.length; i++) {
    arrSquare[i] = arr[i]**2
}

console.log(arr)
console.log(arrSquare)

//! Д/З от Игоря =============================================================================

// 1

const names1 = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages1 = [22, 31, 45, 53];

const result = [];

for (let i = 0; i < names1.length; i++) {
  result.push(`${names1[i]} ${ages1[i]} лет/годов`); // шаблонная строка
  // result.push(names[i] + " " + ages[i] + " лет/годов"); // конкатенация
}

// for (const i in names) {
//     result.push(`${names[i]} ${ages[i]} лет/годов`);
// }
// for (const name of names) {
//     console.log(name);
// }

console.log(result);
console.log(result[0]);

// 2

const resultReverse = [];

for (let i = result.length - 1; i >= 0; i--) {
  resultReverse.push(result[i]);
}

const resultReverseMethod = result.reverse();

console.log(resultReverse);
console.log(resultReverseMethod);

// 3 

const countries1 = [];
countries.push("Франция", "Германия", "Италия");

const italy = countries1.pop();
countries1.unshift(italy);

console.log(countries1);

// 4

const numbers1 = [1, 2, 3, 4, 5];
const newNumbers = [];

for (const i in numbers1) {
    console.log(numbers1[i] * 2);
    newNumbers.push(numbers1[i] ** 2); // Math.pow(numbers[i], 2)
    // newNumbers[i] = (numbers[i] * numbers[i])

}

// Поверхностное копирование (чтение информации)
const arr1 = [1, 2, 3];
const arr1Copy = arr1;

arr1Copy[0] = 1000;

console.log(arr1);
console.log(arr1Copy);

// Глубокое копирование (чтение и редактирование информации)

const arr2 = [1, 2, 3];
const arr2Copy = [...arr2]; // spread

arr2Copy[0] = 1000;

console.log(arr2);
console.log(arr2Copy);
