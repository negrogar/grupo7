import React, {Component} from 'react';
import Contenido from './Contenido';

class Tabla extends Component{

    constructor(){
        super();
        this.state = {
            data: []
        }
        this.data = []
    }

    apiCall(url,consecuencia){
        fetch(url)
            .then( response => response.json())
            .then( data => consecuencia(data))
            .catch(error => console.log(error))
    }

    traerInfo(){
        this.apiCall("http://localhost:3333/api/compras", this.info)
    }

    componentDidMount(){
        console.log('Me monte!')
        this.traerInfo()
    }

    componentDidUpdate(){
        console.log('ASD')
    }

    info = (data)=>{
        this.setState({
            data: data
        })
    }

    render(){
        
        return(
            <div className='container'>
                    <div className="row">
                    <div className="table-responsive">
                        <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Producto Comprado</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Venta Total</th>
                                <th scope="col">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {this.state.data.map((data,i)=>{
                                console.log('Hola')
                                return <Contenido 
                                    nombre = {data.ds_comprador}
                                    producto= {data.ds_producto}
                                    cantidad= {data.dn_cantidad}
                                    total= {data.dn_preciounit}
                                    fecha= {data.dt_fecha}
                                    key={i}
                                />
                                })}
                    
                        </tbody>
                        </table>
                    </div>
                    </div>
                
            </div>
        )
    }   
}

export default Tabla;