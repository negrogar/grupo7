import React from 'react';

function SmallCard(prop){
    return(
        <div className="col-md-4 mb-4">
                <div className={`card border-left-${prop.color} shadow h-100 py-2`}>
                    <div className="card-body">
                        <div className="row no-gutters align-items-center">
                            <div className="col mr-2">
                                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{prop.title}</div>
                                <div className="h5 mb-0 font-weight-bold text-gray-800">{prop.cifra}</div>
                            </div>
                            <div className="col-auto">
                                <i className={`fas ${prop.icono} fa-2x text-gray-300`}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default SmallCard;