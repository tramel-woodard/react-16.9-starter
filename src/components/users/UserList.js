import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const User = ({
    user: {
        id,
        name,
        username,
        email,
        phone,
        website
    }
}) => (
    <Link className="card-body-frame" to={`/users/${id}`}>
        <div className="card-body" key={id}>
            <div className="row">
                <div className="col-md-8">
                    <h2>{name}</h2>
                    <h4>{username}</h4>
                    <h5>{email}</h5>
                    <h6>{phone}</h6>
                </div>
                <div className="col-md-4">
                    <div className="photo-frame">
                        <img className="user-photo" src="http://placehold.it/300x300/cccccc" />
                        <h6>{website}</h6>
                    </div>
                </div>
            </div>
        </div>
        <hr />
    </Link>
);

const API_ADDRESS = 'https://jsonplaceholder.typicode.com';

class UserList extends Component {
    state = { user: {}, users: [] };

    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        fetch(`${API_ADDRESS}/users`)
            .then(response => response.json())
            .then(json => {
                this.setState({ users: json });
            })
            .catch(error => console.error(error.message));
    }

    render() {
        return(
            <div>
                <div className="container user-list-container pt-3 pb-5">
                    <h3>Users</h3>
                    <hr />
                    {this.state.users.map(user => (<User key={user.id} user={user} />))}
                </div>
            </div>
        )
    }
}

export default UserList;
