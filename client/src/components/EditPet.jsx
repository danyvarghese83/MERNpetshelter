import React, { useState, useEffect } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import { Link, Router } from '@reach/router';


const EditPet = props => {
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

    const UpdatePet = e => {
        e.preventDefault();
        const petItem = {petName,petType, petDescription,skill1, skill2, skill3};
        axios.put(`http://localhost:8000/api/pet/${props._id}`, petItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    const remove = () => {
        axios.delete(`http://localhost:8000/api/pet/${props._id}`)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="row">
            
            <form className="col-sm-8 offset-sm-2" onSubmit={UpdatePet}>
            <div className="form-group">
                    <label>Pet Name</label>
                    <input type="text" className="form-control" onChange={e => setPetName(e.target.value)} value = {petName}/>
                    { errors.petName ? <p className="text-danger">{errors.petName.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Pet Type</label>
                    <input type="text" className="form-control" onChange={e => setPetType(e.target.value)} value = {petType}/>
                    { errors.petType ? <p className="text-danger">{errors.petType.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Pet Description</label>
                    <input type="text" className="form-control" onChange={e => setPetDescription(e.target.value)} value = {petDescription}/>
                    { errors.petDescription ? <p className="text-danger">{errors.petDescription.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Skill 1</label>
                    <input type="text" className="form-control" onChange={e => setSkill1(e.target.value)} value = {skill1}/>
                </div>
                <div className="form-group">
                    <label>Skill 2</label>
                    <input type="text" className="form-control" onChange={e => setSkill2(e.target.value)} value = {skill2}/>
                </div>
                <div className="form-group">
                    <label>Skill 3</label>
                    <input type="text" className="form-control" onChange={e => setSkill3(e.target.value)} value = {skill3}/>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Edit Pet" />
            </form>
            <div className="col-sm-8 offset-sm-2 mt-5">
                <button className="btn btn-danger btn-block" onClick={remove}>Remove</button>
            </div>
        </div>
    )

}

export default EditPet;