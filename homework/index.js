/* Задание 1
У вас есть массив объектов:
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
Создайте на основе страрого массива новый массив объектов по образу:
[{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]*/
const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];
const newCars = cars.map (({ brand, isDiesel }) => ({ brand, isDiesel }));
console.log(newCars);

/*Задание 2
Создайте новый массив, где оставьте только машины с дизельным двигателем.*/
const newCars2 = cars.filter((car) => car.isDiesel);
console.log(newCars2);

/*Задание 3
Создайте новый массив, где оставьте только машины не с дизельным двигателем.*/
const newCars3 = cars.filter((car) => !car.isDiesel);
console.log (newCars3);

/*Задание 4
Посчитайте общую стоимость всех машин не с дизельным двигателем.*/
const totalPrice = cars.reduce((acc, car) => {
    if (!car.isDiesel) {
        return acc + car.price;
    }
    return acc;
    }, 0);
console.log(totalPrice);

/*Задание 5
Повысьте цену всех машин в массиве на 20%.*/
cars.forEach ((car) => car.price *= 1.2);
console.log(cars);

/*Задание 6
Создайте новый массив, где все дизельные машины заменены на { brand: "Tesla", price: 25000, isDiesel: false }*/
const newCarsArray = cars.map ((car) => { 
    if (car.isDiesel) {
        return { brand: "Tesla", price: 25000, isDiesel: false }
        } else {
        return car
    }});
console.log(newCarsArray);