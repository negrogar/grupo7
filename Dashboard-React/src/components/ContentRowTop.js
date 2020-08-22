import React from 'react';
import SmallCard from './SmallCard';
import PropTypes from 'prop-types';

/*Estructura del fetch de axios. Uso el componentDidMount() para que
haga el fetch una vez que carga el componente */

function ContentRowTop(){
    
    let productsInDB = { //Aca seria el fetch de Axios!
        title:'Productos en DB',
        cifra: '42',
        color: 'primary',
        icono: 'fa-clipboard-list'
    }
    
    let amountOfProductsInDB = {
        title:'Categorias en DB',
        cifra: '3',
        color: 'success',
        icono: 'fa-dollar-sign'
    }
    
    let amountOfUsersInDB = {
        title:'Candtidad de Usuarios',
        cifra: '14',
        color: 'warning',
        icono: 'fa-user-check'
    }
    
    let cards = [productsInDB, amountOfProductsInDB,amountOfUsersInDB]
    return (
    <div className="row">
        {cards.map((card,i)=>{
            return <SmallCard 
            {...card} key={i}
            />
        })}
        
    </div>
    )
}

SmallCard.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired   
}

SmallCard.defaultProps = {
    title: 'Titulo Default',
    color: 'success'
}

export default ContentRowTop;