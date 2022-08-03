const createTable = (number) => {
  let result = '';
  for (let i = 0; i <= number; i++) {
    for (let j = 0; j <= number; j++) {
      if (i == 0 && j > 0) {
        result += '\t' + `${j}`;
      } else if (j == 0 && i > 0) {
        result += `${i}|`;
      } else if (i > 0 && j > 0) {
        result += '\t' + i * j;
      }
    }
    result += '\n';
  }
  return result;
};

// console.log(createTable(4));

function filterArray(array) {
  let arraytoString = array
    .sort((a, b) => a - b)
    .map((item) => {
      return item.toString();
    });

  console.log(arraytoString);

  function filter(params) {
    return arraytoString.filter((item) => {
      return item.includes(array[params].toString().substr(-1));
    });
  }

  let newArray = [];

  function search() {
    return arraytoString.map((item, index) => {
      if (filter(index).length == 1) {
        return newArray.push(item);
      }
    });
  }

  search();

  console.log(newArray);

  if (newArray.length == 1) {
    return newArray;
  } else if (newArray.length == 0) {
    return newArray;
  }else{}


  
}
console.log(filterArray([41, 55, 61, 1, 8, 27, 37, 39]));
