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

console.log(createTable(4));

const filterArray = (array) => {

  let arraytoString = sort(array)

  let newArray = [];

  let newArrayUp = [];

  let arrayA3 = []


  function sort(params) {
    return params.sort((a, b) => a - b)
      .map((item) => {
        return item.toString();
      });
  }

  function filter(params) {
    return arraytoString.filter((item) => item.includes(array[params].toString().substr(-1))
    );
  }
  function search(params) {
    return params.forEach((item, index) => {
      if (filter(index, item.length).length == 1) {
        return newArray.push(item);
      }
    });
  }

  function filter2(params) {
    return sort(newArrayUp).filter((item) => item.includes(array[params].toString().substr(-1)));
  }
  function search2(params) {
    return params.forEach((item, index) => {
      if (filter2(index, params).length == 1) {
        return arrayA3.push(item);
      }
    });
  }
  search(sort(array));
  console.log(newArray.map((item) => Number(item)));

  function comparison(params1, params2) {
    return JSON.stringify(params1) === JSON.stringify(params2)
  }

  function modificationArray(params) {

    return params.map((item) => {
      return newArrayUp.push(item.split('').reverse().join('') ** 2)
    })
  }

  if (newArray.length === 1 || newArray.length === 0 || comparison(newArray, arraytoString)) {
    return newArray.map((item) => Number(item));
  } else {
    modificationArray(newArray)
    search2(sort(newArrayUp));
    return arrayA3.map((item) => Number(item))
  }

}
console.log(filterArray([41, 55, 61, 1, 8, 27, 37, 39]));
