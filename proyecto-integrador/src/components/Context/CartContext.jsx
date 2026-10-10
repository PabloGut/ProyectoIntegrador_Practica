import { createContext, useState } from "react";
import productosJSON from "../../assets/productos.json"

export const CartContext = createContext("")
// No entiendo de donde sale la propiedad cantidad, no esta en el json, se agrega cuando se agrega el producto al carrito. DOnde se agrega la propiedad cantidad? se agrega en la funcion agregarProductoAlCarrito, cuando se agrega un producto al carrito, se le agrega la propiedad cantidad al objeto producto.
const CartContextProvider = ({children}) => {
    const [productos, setProductos] = useState(productosJSON)
    const [carrito, setCarrito] = useState([])
 //producto.cantidad , cantidad es una propiedad que se le agrega al objeto producto para poder llevar la cuenta de cuantas unidades de ese producto hay en el carrito. DOnde est el atributo cantidad? no esta en el json, se agrega cuando se agrega el producto al carrito.
 //La linea de codigo donde se agrega la propiedad cantidad al objeto producto es: producto.cantidad = 1, en la funcion agregarProductoAlCarrito, cuando se agrega un producto al carrito, se le agrega la propiedad cantidad al objeto producto. 
 // Es decir con la linea de codigo producto.cantidad = 1, se le agrega la propiedad cantidad al objeto producto, y se le asigna el valor 1, que es la cantidad inicial de ese producto en el carrito.
 const agregarProductoAlCarrito = (id) => {
        let producto = carrito.find(item => item.id === id)
        
        if(producto){
            producto.cantidad++
            setCarrito([...carrito])    
        } else {
            producto = productos.find(item => item.id === id)
            producto.cantidad = 1
            setCarrito([...carrito, producto])
        }

        console.log("El producto # "+id+" se agrego al carrito")
    }

    
    const eliminarProductoDelCarrito = (id) => {
        const carritoActualizado = productos.filter(item => item.id != id)
        setCarrito([...carritoActualizado])
        console.log(" Se elimino correctamente el producto con #: " + id) + "del carrito"
    }

    const vaciarCarrito = () => {
        setCarrito([])
        console.log("Se vació el carrito")
    }

    const incrementarItems = (id) => {
        let producto = carrito.find(item => item.id === id)

        if(producto.cantidad < producto.stock){
            producto.cantidad++
            setCarrito([...carrito])
        } 
    }

    const decrementarItems = (id) => {
         let producto = carrito.find(item => item.id === id)

        if(producto.cantidad > 1){
            producto.cantidad--
            setCarrito([...carrito])
        } 
    }
    const totalProductosCarrito = () => {
        return carrito.reduce((acum,item) => acum += item.cantidad,0)
    }

    const sumarProductosCarrito = () => {
        return carrito.reduce((acum,item) => acum +=item.precio * item.cantidad,0)
    }

    return <CartContext.Provider value={{productos, carrito, agregarProductoAlCarrito, eliminarProductoDelCarrito, vaciarCarrito,
             totalProductosCarrito, sumarProductosCarrito, incrementarItems, decrementarItems}}>
            {children}
    </CartContext.Provider>
    
}

export default CartContextProvider