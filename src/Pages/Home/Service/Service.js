import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <PageTitle title="Service"></PageTitle>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: ${price}</p>
            <p><small>Description: {description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-primary'>Booking: {name}</button>
        </div>
    );
};

export default Service;