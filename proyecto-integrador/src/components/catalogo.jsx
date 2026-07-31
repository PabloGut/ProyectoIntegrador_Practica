import productos from '../assets/productos.json'
import Cards from './Cards'

const Catalogo = ()=>{
  console.log(productos)
    return (
          <div className="container">
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