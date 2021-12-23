import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import Universities from './Universities';

const UniversityList = () => {
    const [universities, setUniversities] = useState([])
    useEffect(() => {
        fetch('/uni_data.json')
        .then(res => res.json())
        .then(data => setUniversities(data))
    }, [])
    return (
        <div className='links'>
            <h1 style={{textAlign:'center'}}>University List</h1>
            {universities.length === 0? <Loading />: 
                universities.map((university, index) => <Universities university={university} index={index} />)
            }
        </div>
    );
};

export default UniversityList;