import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "600px", height: "350px", margin: '40px' }} src={notFound} alt="" />
            <br />
            <Link to="/"><button>Go Back</button></Link>
        </div>
    );
};

export default NotFound;