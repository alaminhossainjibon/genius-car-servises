import React from 'react';
import notfound from '../../../images/notfound.gif'
import PageTitle from '../PageTitle/PageTitle';
const NotFound = () => {
    return (
        <div className='container w-50 mx-auto'>
            <PageTitle title="Not Found"></PageTitle>
            <h1 className='text-primary text-center'>Page is Error</h1>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;