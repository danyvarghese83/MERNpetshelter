import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';




const Display = props => {

    // const [all, setAll] = useState([]);
    
    const [petNames, setPetNames] = useState([]);

    const fetchPetNames = () => {
        axios.get("http://localhost:8000/api/pet")
            .then(res => {
                console.log(res);
                // setAll(res.data);
                
                setPetNames(res.data);
            })
            .catch(err => console.log(err));
    }

    useEffect( () => {
        fetchPetNames();
    }, []);

    const remove = _id => {
        console.log(_id);
        axios.delete(`http://localhost:8000/api/pet/${_id}`)
            .then(res => {
                console.log(res);
                fetchPetNames();
            })
            .catch(err => console.log(err));
    }
    
    
    return (
        <div>
            {petNames.map( (act, i) => 
                <div className="card mb-3" key={act._id}>
                    <div className="card-header bg-primary text-light">{act.petName}</div>
                    <div className="card-body">
                        <p>Pet Type: {act.petType}</p>
                        <p>Pet Description:{act.petDescription}</p>
                        <p>Skills:{act.skill1},{act.skill2},{act.skill3}</p>
                        <Link className="btn btn-outline-primary" to={`/edit/${act._id}`}>Edit</Link>
                        <button className="btn btn-outline-danger float-right" onClick={e => remove(act._id)}>Adopt {act.petName}</button>
                        <Link className="btn btn-outline-primary" to={`/info/${act._id}`}>Details</Link>
                        
                    </div>
                </div>
                // <table class="table">
                // <thead class="thead-dark">
                //     <tr>                    
                //     <th>Pet Name</th>
                //     <th>Type</th>
                //     <th>Actions</th>
                //     </tr>
                // </thead>
                // <tbody>
                //     <tr>
                //     <td>{act.petName}</td>
                //     <td>{act.petType}</td>
                //     </tr>
                // </tbody>
                // </table>
            )}
        </div>
    )
}

export default Display;