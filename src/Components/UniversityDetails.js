import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UniversityDetails = () => {
    const [universities, setUniversities] = useState([])

    const {index} = useParams()
    useEffect(() => {
        fetch('/uni_data.json')
        .then(res => res.json())
        .then(data => setUniversities(data))
    },[])
    const clickedUniversity = universities[index]
    //const {name, country, web_pages, state_province, domains, alpha_two_code} = clickedUniversity;
    console.log(clickedUniversity)
    return (
        <div className='details'>
            {!clickedUniversity?.name? 'Loading...': <div>
            <h3>University Name: {clickedUniversity?.name}</h3>
            <p>Country : {clickedUniversity?.country}</p>
            <p>Website Link : <a href={clickedUniversity?.web_pages[0]}>{clickedUniversity?.web_pages[0]}</a></p>
            <p>Alpha Code : {clickedUniversity?.alpha_two_code}</p>
            <p>Domain List :</p>
            <ul>
                {
                    clickedUniversity?.domains.map(domain => <li>{domain}</li>)
                }
            </ul>
            </div>  }
            <Link to="/list">Back to university list</Link>
        </div>
    );
};

export default UniversityDetails;