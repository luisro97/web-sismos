import React from 'react';

class Navbar extends React.Component {
    render() { 
        return (
            <React.Fragment>
                <div className = "navbar">
                    <h4>App-Sismos</h4>
                    <a>Listado de sismos</a>
                    <a>Desarrollador</a>
                    <a>Pagina original</a>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Navbar;