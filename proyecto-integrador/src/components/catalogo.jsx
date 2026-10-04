import { useEffect, useState } from 'react'
import productosJSON from '../assets/productos.json'
import Cards from './Cards'
import { useParams } from 'react-router-dom'

const Catalogo = ()=>{
   // const productos = []
    const [items,setItems] = useState(productosJSON)
    const {categoria} = useParams()

    useEffect(()=>{
       setItems(categoria ? productosJSON.filter(item=> item.categoria == categoria): productosJSON)
    }, [categoria])

    if(items.length ==0){
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
          <div className="container my-5">
            <div className="row">
                    {
                        items.map( item =>(
                            <Cards key={item.id} item={item}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default Catalogo