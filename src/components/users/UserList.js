import React, { Component } from 'react';

const API_ADDRESS = 'https://jsonplaceholder.typicode.com';

class UserList extends Component {
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
            <div className="card-body-frame">
                <div className="card-body" key={user.id}>
                    <div className="row">
                        <div className="col-md-8">
                            <h1>{user.name}</h1>
                            <h3>{user.username}</h3>
                            <h4>{user.email}</h4>
                            <h5>{user.phone}</h5>
                        </div>
                        <div className="col-md-4">
                            <div className="photo-frame">
                                <img className="user-photo" src="http://placehold.it/300x300/cccccc" />
                                <h6>{user.website}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        ));

        return(
            <div>
                <div className="container pt-3 pb-5">
                    <h3>Users</h3>
                    <hr />
                    {users}
                </div>
            </div>
        )
    }
}

export default UserList;
