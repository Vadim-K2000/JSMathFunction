'use strict';

// 1.  Даны переменные a = 10 и b = 3. Найдите остаток от деления a на b

const shared = (a, b) => {
  return a % b;
};

console.log('//1');
console.log(shared(10, 3));

// 2. Даны переменные a и b.Проверьте, что a делится без остатка на b.
// Если это так - выведите 'Делится' и результат деления, иначе выведите
// 'Делится с остатком' и остаток от деления.

const checkShares = (a, b) => {
  a % b === 0 ? 'Делится' : 'Делится с остатком';
};

console.log('//2');
console.log(checkShares(10, 3));

// 3. Возведите 2 в 10 степень. Результат запишите в переменную st.

const pow = (a, b) => {
  return Math.pow(a, b);
};

console.log('//3');
console.log(pow(2, 10));

// 4. Найдите квадратный корень из 245.

const sqrt = (a) => {
  return Math.sqrt(a);
};

console.log('//4');
console.log(sqrt(245));

// 5. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
// из суммы кубов его элементов. Для решения воспользуйтесь циклом for.

const func = (arr = []) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i]);
  }
  return sqrt(result);
};

console.log('//5');
console.log(func([4, 2, 5, 19, 13, 0, 10]));

// 6. Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

const sqrtFunc = (a) => {
  var b = Math.sqrt(a);
  console.log(Math.round(b));
  console.log(b.toFixed(1));
  console.log(b.toFixed(2));
};

console.log('//6');
console.log(sqrtFunc(379));

// 7. Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

const rounded = (a) => {
  a = Math.sqrt(a);
  return {
    floor: Math.floor(a),
    ceil: Math.ceil(a),
  };
};

console.log('//7');
console.log(rounded(587));

// 8. Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

const arrMax = (...args) => {
  return Math.max(...args);
};

const arrMin = (...args) => {
  return Math.min(...args);
};

console.log('//8');
console.log(arrMax(4, -2, 5, 19, -130, 0, 10));
console.log(arrMin(4, -2, 5, 19, -130, 0, 10));

// 9. Выведите на экран случайное целое число от 1 до 100.

const rand100 = () => {
  return Math.round(Math.random() * 100);
};

console.log('//9');
console.log(rand100());

// 10.Заполните массив 10-ю случайными целыми числами.
// (Подсказка: нужно воспользоваться циклами for или while).

const randArr = () => {
  let arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = rand100();
  }
  return arr;
};

console.log('//10');
console.log(randArr());

// 11. Даны переменные a и b. Найдите найдите модуль разности a и b.
// Проверьте работу скрипта самостоятельно для различных a и b.

const moduleDif = (a, b) => {
  return Math.abs(a - b);
};

console.log('//11');
console.log(moduleDif(-19, 3));

// 12. Даны переменные a и b. Отнимите от a переменную b и результат присвойте переменной c.
// Сделайте так, чтобы в любом случае в переменную c записалось положительное значение.
// Проверьте работу скрипта при a и b, равных соответственно 3 и 5, 6 и 1.

const func2 = (a, b) => {
  let c = Math.abs(a - b);
  return c;
};

console.log('//12');
console.log(func2(3, 5));
console.log(func2(6, 1));

// 13. Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.

const func3 = (arr = []) => {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result / arr.length;
};

console.log('//13');
console.log(func3([12, 15, 20, 25, 59, 79]));
