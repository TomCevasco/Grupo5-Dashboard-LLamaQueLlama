import React from 'react';


function Marca(marca){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        {marca.nombre_marca}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Marca;