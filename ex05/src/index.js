function main(numOne, numTwo) {
    var product;
    product = numOne * numTwo;
    return product;
  }
  console.log(main(2.5, 2.0));
  console.log(main(5.5, 5.5));
  console.log(main(100.25, 43.2));
  module.exports = main;