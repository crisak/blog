import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { name: "Cristian", email: "cris@gmail.com", link: "www.google.com" },
                { name: "Romero", email: "camilo@gmail.com", link: "www.googleplus.com" }
            ]
        };
    }
    componentDidMount() {
        
    }

    get rows() {
        return this.state.users.map((user, index) => (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.link}</td>
            </tr>
        ));
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>
                    {this.rows}
                </tbody>
            </table>
        );
    }
}

export default App;