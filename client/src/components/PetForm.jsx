import React, { useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';


const PetForm = props => {
    const [petName, setPetName] = useState("");
    const [petType, setPetType] = useState("");
    const [petDescription, setPetDescription] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [errors, setErrors] = useState({});


    const CreatePet = e => {
        e.preventDefault();
        const petItem = {petName,petType, petDescription,skill1, skill2, skill3};
        axios.post("http://localhost:8000/api/pet", petItem)
            .then(res => {
                console.log(res);
                if(res.data.errors) {
                    setErrors(res.data.errors);
                } else {
                    navigate("/");
                }
            }).catch(err => console.log(err));
    }

    return (
        <div className="row">
            <form className="col-sm-8 offset-sm-2" onSubmit={CreatePet}>
                <div className="form-group">
                    <label>Pet Name</label>
                    <input type="text" className="form-control" onChange={e => setPetName(e.target.value)} />
                    { errors.petName ? <p className="text-danger">{errors.petName.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Pet Type</label>
                    <input type="text" className="form-control" onChange={e => setPetType(e.target.value)} />
                    { errors.petType ? <p className="text-danger">{errors.petType.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Pet Description</label>
                    <input type="text" className="form-control" onChange={e => setPetDescription(e.target.value)} />
                    { errors.petDescription ? <p className="text-danger">{errors.petDescription.properties.message}</p>: "" }
                </div>
                <div className="form-group">
                    <label>Skill 1</label>
                    <input type="text" className="form-control" onChange={e => setSkill1(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Skill 2</label>
                    <input type="text" className="form-control" onChange={e => setSkill2(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Skill 3</label>
                    <input type="text" className="form-control" onChange={e => setSkill3(e.target.value)} />
                </div>
                
                <input type="submit" className="btn btn-success btn-block" value="Add Pet" />
            </form>
        </div>
    )

}

export default PetForm;