const productos = [
    {id: 1, nombre: "Notebook", stock: 12},
    {id: 2, nombre: "Iphone 14 pro max", stock: 3},
    {id: 3, nombre: "Teclado noxi", stock: 2},
    {id: 4, nombre: "Escritorio", stock: 1},
]

function getOne(id) {
    return productos.find((producto) => producto.id ===  id);
}

function getAll() {
    return productos;
}

function getAllWith(minStock) {
return productos.filter((producto) => producto.stock >= minStock);
}

module.exports = {getOne, getAll, getAllWith};