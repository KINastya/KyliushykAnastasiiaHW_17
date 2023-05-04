// Реалізувати рекурсивну функцію, яка зводить число в ступінь.

// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).
const num = prompt('Введіть число');
const degree = prompt('У яку ступінь ви бажаєте піднести');

const result = expon(num, degree)
function expon(num, degree) {
    if (degree === 0) {
      return 1;
    } else if (degree === 1) {
      return num;
    } else {
      return num * expon(num, degree - 1);
    }
  }

  console.log(result);