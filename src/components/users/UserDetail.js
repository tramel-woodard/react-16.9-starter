import React, { Component } from 'react';

const API_ADDRESS = 'https://jsonplaceholder.typicode.com';

class UserDetail extends Component {

    componentDidMount() {
        const { match: { params } } = this.props;

        console.log('this.props.params', this.props.params);

        /* fetch(`${API_ADDRESS}/users?id=` + )
            .then(response => response.json())
            .then(json => {
                console.log('user', json);
            }); */
    }
}

export default UserDetail;