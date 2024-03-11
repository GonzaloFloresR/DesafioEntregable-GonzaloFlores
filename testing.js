import ProductManager from "./ProductManager.js";

const producto = new ProductManager();

console.log(producto.getProducts());

const Agregado = producto.addProduct("Producto Prueba","Este es un producto Prueba",200,"sin imagen","abc123",25);
console.log(Agregado);

console.log(producto.getProducts());



const Agregado2 = producto.addProduct("Producto Prueba","Este es un producto Prueba",200,"sin imagen","abc123",25);
console.log(Agregado2);

console.log(producto.getProducts());



const Miproducto = producto.getProductById(2);
console.log(Miproducto);
