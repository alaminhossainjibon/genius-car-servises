import React from 'react';
import { useParams } from 'react-router-dom';
import useServicesDetail from '../../../hooks/useServiceDetail';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServicesDetail(serviceId);
    const [user] = useAuthState(auth);

    const handlePlaceOrder = e => {
        e.preventDefault();
        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: e.target.address.value,
            phone: e.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked');
                    e.target.reset();
                }
            })
    }

    return (
        <div className='w-50 mx-auto'>
            <PageTitle title="Checkout"></PageTitle>
            <h2>Please Order: {service.name}</h2>

            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" id="" placeholder='name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" id="" placeholder='email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="text" value={service.name} name="service" id="" placeholder='service' required readOnly />
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2' type="text" name="phone" id="" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Please Order" />
            </form>
        </div>
    );
};

export default Checkout;