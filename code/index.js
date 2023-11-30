const brothers = [
    { race: "hobbit", height: 110, age: 45, name: "Frodo Baggins" },
    { race: "human", height: 185, age: 46, name: "Aragorn" },
    { race: "elf", height: 189, age: 110, name: "Legolas" },
    { race: "dworf", height: 140, age: 150, name: "Gimly" },
    { race: "human", height: 195, age: 200, name: "Gandalf" },
];
// Метод Map - возвращает новый массив,
// созданный путем применения функции к каждому элементу исходного массива
//Этот метод не изменяет исходный массив

// Пример 1
const names = brothers.map((element) => element.name);
console.log(names);// ["Frodo Baggins", "Aragorn", "Legolas", "Gimly", "Gandalf"]

// Пример 2
// слова element/ brother -это всего лишь имя переменной (может быть любым)
// Удобно выбирать слово в единственном числе,
// пример массив cars - переменную в колбеке назвать car

const ages = brothers.map((brother) => brother.age);
console.log(ages);// [45, 46, 110, 150, 200]
console.log(names, ages);

// Пример 3
const racesNames = brothers.map((brother) => `${brother.race} ${brother.name}`);
const racesNames2 = brothers.map((brother) => brother.race + " " + brother.name);
console.log(racesNames);
console.log(racesNames2);

//Пример 4
// высокий - выше или равно 170
// маленький - ниже 170
// массив из слов [маленький, высокий,высокий, маленький,высокий]

const height = brothers.map((brother) => {
    if (brother.height >= 170) {
        return "высокий";
    }
    return "маленький";
});
console.log(height);

const height2 = brothers.map((brother) => brother.height >= 170 ? "высокий" : "маленький");
console.log(height2);


// Метод forEach-  для изменния исходного массива

// Пример 1
//Состарим всех героев на 1 год

brothers.forEach((brother) => brother.age += 1);
console.log(brothers);

// Пример 2
// Переведем все имена в верхний регистр
brothers.forEach((brother) => brother.name = brother.name.toUpperCase());
console.log(brothers);

// Пример 3
// Method Reduce - возвращает одно значение
// Этот метод применяет функцию к каждому элементу исходного массива и возвращает одно значение
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
console.log(sum);


// Аккумулятор (accumulator) - значение, которое накапливает результат применения функции.
 // Текущий элемент массива (currentValue).
 // Текущий индекс (currentIndex) элемента в массиве.
 // Сам массив (array), к которому применяется метод reduce.
 // Функция callback должна возвращать новое значение аккумулятора после обработки текущего элемента.

 // initialValue (необязательный): Начальное значение аккумулятора. Если это значение указано,
 //  то оно будет использовано в качестве начального значения аккумулятора при первом вызове функции callback.
 // Если initialValue не указан, то первый элемент массива станет начальным значением аккумулятора.
const sum2 = ages.reduce((acc, current) => acc + current, 0);
console.log(sum2);
// iteration -- acc -- current 
  // 1         -- 0   -- 45
  // 2         -- 45  -- 46
  // 3         -- 91  -- 110
  // 4         -- 201 -- 150
  // 5         -- 351 -- 200


const totalHeight = brothers.reduce((acc, brother) => acc + brother.height, 0);
console.log(totalHeight);  

const totalHeight2 = brothers.map((brother) => brother.height)
.reduce((acc, height) => acc + height, 0);
console.log(totalHeight2);

// Хотим объединить все имена через пробел
const nameStr = brothers.map((brother) => brother.name)
.reduce((acc, name) => acc + name + " " , "");
console.log(nameStr);

//.trim() - удаляет пробелы в начале и конце строки

// Method split - разбивает строку
const str = "Gandalf, Aragorn, Legolas, Gimli";
const namesArray = str.split(",");
console.log(namesArray);


//Method join
const newSrt = namesArray.join(" ! ");
console.log(newSrt);

// Method Find - возвращает первое совпадение с заданным условием
const person = brothers.find((brother) => brother.race === "human");
console.log(person);

const person2 = brothers.find((brother) => brother.height <= 120);
console.log(person2);

const person3 = brothers.find((brother) => brother.name === "ARAGORN");
console.log(person3);

// Метод filter
// Возвращает все элементы удовлетворяющие условию
// не мутирующий массив (не изменяет исходный массив)

const oldBrothers = brothers.filter((brother) => brother.age > 100);
console.log(oldBrothers);

const shortBrothers = brothers.filter((brother) => brother.height < 170);
console.log(shortBrothers);

// Выбрать всех старых, но не  human
const oldNonHuman = brothers
.filter((brother) => brother.age > 100 && brother.race !== "human");
console.log(oldNonHuman);


