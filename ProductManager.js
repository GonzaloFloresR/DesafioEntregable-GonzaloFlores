class ProductManager {
    #products;
    static idProducto = 0;

    constructor(){
        this.#products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock){

        if(!title || !description || !price || !thumbnail || !code || !stock){

            return `🛑 Se require completar todos los parametros: title, description, price, thumbnail, code, stock`;

        } else {

            let repetido = this.#products.some( pro => pro.code === code.trim()); //validar que no se repita el code

            if(repetido){

                return "🛑 There is already a product with this code 🛑";

            } else {
                ProductManager.idProducto = ++ProductManager.idProducto; //id autoincremental
                let id = ProductManager.idProducto; 

                const nuevoProducto = {
                        id:id,
                        title:title,
                        description:description,
                        price:price,
                        thumbnail:thumbnail,
                        code:code,
                        stock:stock
                    };
                
                this.#products.push(nuevoProducto);
                return `✅ Product added successfully ✅`;
            }
        }
    }

    getProducts(){
        //Devolver todos los productos
        return this.#products;
    }

    getProductById(id){
        let producto = this.#products.find((prod)=>prod.id === id);
        return producto? producto : `🛑 Product ID: ${id} Not Found 🛑`;
    } 

}

export default ProductManager;