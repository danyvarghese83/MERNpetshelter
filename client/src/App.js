import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from "./components/Display";
import PetForm from "./components/PetForm";
import EditPet from "./components/EditPet";
import Detail from "./components/Detail";
import { Link, Router } from '@reach/router';

function App() {
  return (
    <div className="container">
      <h1>Pet Shelter</h1>
      <h3>These pets are looking for a loving home</h3>
      <Link className="btn btn-info" to="/">Back to Home</Link>
      <Link className="btn btn-info" to="/new">Add a pet</Link>
      <Router className="my-5">
        <Display path="/" />
        <PetForm path="/new" />
        <EditPet path="/edit/:_id" />
        <Detail path="/info/:_id" />
      </Router>
    </div>
  );
}

export default App;                           
