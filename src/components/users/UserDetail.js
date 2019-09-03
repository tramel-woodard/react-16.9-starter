import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './user.css';

const API_ADDRESS = 'https://jsonplaceholder.typicode.com';

const Detail = ({
    user: {
        name,
        username,
        email,
        phone,
        website
    } 
}) => (
    <div className="user-detail-container">
        <div className="row">
            <div className="col-md-12">
                <h3>{name}</h3>
                <hr />
            </div>
        </div>
        <div className="row">
            <div className="col-md-8">
                <h5><span>Name</span> {name}</h5>
                <h5><span>Username</span> {username}</h5>
                <h5><span>Email</span> {email}</h5>
                <h5><span>Phone</span> {phone}</h5>
            </div>
            <div className="col-md-4">
                <img className="photo" src="http://placehold.it/300x300" />
                <p className="caption">{website}</p>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <hr />
                <Link to={'/users'}>Back to Users</Link>
            </div>
        </div>
    </div>
);

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            id: props.match.params.id
        };
    }

    componentDidMount() {
        fetch(`${API_ADDRESS}/users?id=` + this.state.id)
            .then(response => response.json())
            .then(json => {
                this.setState({ user: json[0] });
            });
    }

    render() {
        return(
            <div>
                <div className="container pt-3 pb-5">
                    <Detail user={this.state.user} />
                </div>
            </div>
        )
    }
}

export default UserDetail;
