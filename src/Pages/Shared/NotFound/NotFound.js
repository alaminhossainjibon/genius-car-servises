import React from 'react';
import notfound from '../../../images/notfound.gif'
const NotFound = () => {
    return (
        <div>
            <h1 className='text-primary text-center'>Page is Error</h1>
            <img src={notfound} alt="" />
        </div>
    );
};

export default NotFound;