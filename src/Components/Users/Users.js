import React, { useEffect, useState } from 'react';
import User from '../User/User';

const Users = () => {
    const [user, setUser]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])
    return (
        <div>
            <h1>User: {user.length}</h1>
            {
                user.map(user=> <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;