import React, { Component } from 'react';

class Nofoundpage extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            title: 'Página no encontrada - 404',
        };
    }

    render() {
        return(
            <h1>404</h1>
        );
    }
}

export default Nofoundpage;