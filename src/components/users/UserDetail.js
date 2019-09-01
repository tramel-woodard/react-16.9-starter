import React, { Component } from 'react';

const API_ADDRESS = 'https://jsonplaceholder.typicode.com';

class UserDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        };
    }

    componentDidMount() {
        fetch(`${API_ADDRESS}/users?id=` + this.props.match.params.id)
            .then(response => response.json())
            .then(json => {
                console.log('user', json);
            });
    }

    render() {

        return(
            <div>
                <div className="container">
                    <h3>User Detail ({})</h3>
                    <hr />
                    
                </div>
            </div>
        )
    }
}

export default UserDetail;
