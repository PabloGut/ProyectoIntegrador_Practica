import { useContext, useEffect, useState } from 'react'
import Cards from './Cards'
import { useParams } from 'react-router-dom'
import { CartContext } from './Context/CartContext'

const Catalogo = ()=>{
   // const productos = []
    const {productos} = useContext(CartContext)
    const [items,setItems] = useState([])
    const {categoria} = useParams()

    useEffect(()=>{
       setItems(categoria ? productos.filter(item=> item.categoria == categoria): productos)
    }, [productos,categoria])

    if(productos.length ==0){
        return (
            <div className="container py-5">
                <div className="row">
                    <div className="col text-center">
                            <div class="alert alert-danger" role="alert">
                                <h3 classNema="fw-bold">No hay productos</h3>
                            </div>
                    </div>
                </div>
            </div>
        )
    }



    return (
            <div className="container-fluid bg-light py-5">
                <div className="container my-5">
                    <div className="row">
                        {
                            productos.map( item =>(
                                <Cards key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
           </div>
    )
}

export default Catalogo