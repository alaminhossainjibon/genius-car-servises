import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://secret-dawn-58089.herokuapp.com/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div id='services' className='container'>
            <PageTitle title="Services"></PageTitle>
            <h1 className='text-center text-primary my-5'>Our Services</h1>
            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;