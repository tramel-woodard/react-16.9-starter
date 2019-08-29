import React, { Component } from 'react';

const API_ADDRESS = 'https://jsonplaceholder.typicode.com';

class Users extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        this.findUsers();
    }

    findUsers = () => {
        fetch(`${API_ADDRESS}/users`)
            .then(response => response.json())
            .then(json => {
                console.log('json', json);
                this.setState({ users: json });
            })
            .catch(error => console.error(error.message));
    }

    render() {
        if (!this.state.users.length) return null;

        let users = this.state.users.map((user, i) => (
            <p key={user.id}>
                Name: {user.name}<br />
                Username: {user.username}<br />
                Email: {user.email}<br />
                Phone: {user.phone}<br />
                Website: {user.website}<br />
            </p>
        ));

        return(
            <div>
                <div className="container">
                    <h3>Users</h3>
                    <hr />
                    {users}
                </div>
            </div>
        )
    }
}

export default Users;
