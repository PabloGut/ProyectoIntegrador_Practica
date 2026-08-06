import productos from '../assets/productos.json'
import Cards from './Cards'

const Catalogo = ()=>{
   // const productos = []

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
          <div className="container my-5">
            <div className="row">
                    {
                        productos.map( item =>(
                            <Cards key={item.id} item={item}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default Catalogo