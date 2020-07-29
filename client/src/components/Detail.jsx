import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';



const Detail = props => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});
    

    useEffect( () => {
        axios.get(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                console.log(res);
                setPetName(res.data.petName);
                setPetType(res.data.petType);
                setPetDescription(res.data.petDescription);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill3(res.data.skill3);
            }).catch(errors => console.log(errors));
    }, [props._id]);

    const remove = () => {
        axios.delete(`http://localhost:8000/api/pet/${props._id}`)
        .then(res => {
            console.log(res);
            navigate("/");
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <div className="card mb-1">
                <div className="card-header">Pet Name: {petName}</div>
                <div className="card-body">
                    <p>Pet Type: {petType}</p>
                    <p>Description: {petDescription}</p>
                    <p>Skill 1: {skill1}</p>
                    <p>Skill 2: {skill2}</p>
                    <p>Skill 3: {skill3}</p>
                    <button className="btn btn-outline-danger float-right" onClick={remove} >Adopt Pet Now!</button>
                </div>
            </div>
    </div>
    )
}

export default Detail;