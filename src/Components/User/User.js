import React from 'react';
import { Link } from 'react-router-dom';

const User = (props) => {
    const {id, name} =props.user
    return (
        <div>
            <h3>{name}</h3>
            <Link to={'/user/' + id}>click</Link>
        </div>
    );
};

export default User;