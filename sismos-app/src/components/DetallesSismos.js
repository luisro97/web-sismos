import React from 'react';

//Aqui se debe consumir la API y realizar un ciclo para que cree cada dato
class DetallesSismos extends React.Component {
    render(){
        return (
            <React.Fragment>
                <div className = "detalles_sismo">
                    <h3>Detalles del sismo</h3>
                    <table>
                        <tbody>
                        <tr>
                            <th>Fecha</th>
                            <th>Latitud</th>
                            <th>Longitud</th>
                            <th>Profundidad</th>
                            <th>Magnitud</th>
                            <th>Referencia geografica</th>
                        </tr>
                        <tr>
                            <td>{this.props.fecha}</td>
                            <td>{this.props.latitud}</td>
                            <td>{this.props.longitud}</td>
                            <td>{this.props.profundidad}</td>
                            <td>{this.props.magnitud}</td>
                            <td>{this.props.ref_geografica}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default DetallesSismos;