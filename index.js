const {getAll, getOne, getAllWith} = require("./products"); 

function main() {
  console.log("aca estan todos los productos en stock");
  console.log(getAll());

  console.log("aca esta el producto id 1");
  console.log(getOne(1));

  console.log("aqui estan los productos con stock mayor a 2");
  console.log(getAllWith(2));
}

main();
