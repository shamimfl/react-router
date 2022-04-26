import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const prams = useParams();
    const {id}=prams;
    const [detail, setdetail] =useState({})
    const url =`https://jsonplaceholder.typicode.com/users/${id}`
    console.log(url)
    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(data=> setdetail(data))

    },[])
    return (
        <div>
            <h3>User information here!!!!</h3>
            <h4>User ID :{id}</h4>
            <h4>Name: {detail.name}</h4>
            <h4>Email:{detail.email}</h4>
            <h4>City:{detail.address?.city}</h4>
            
        </div>
    );
};

export default UserDetails;