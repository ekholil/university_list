import React from 'react';
import { Link } from 'react-router-dom';

const Universities = (props) => {
    const {index} = props
    return (
        <div>
            <Link className='uni_link' to={`/details/${index}`}>{props.university.name}</Link>
            
        </div>
    );
};

export default Universities;