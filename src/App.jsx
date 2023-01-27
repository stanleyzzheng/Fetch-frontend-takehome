import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);

  useEffect(() => {
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => {
        setOccupations(res.data.occupations);
        setStates(res.data.states);
      });
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const state = document.getElementById("state").value;
    const occupation = document.getElementById("occupation").value;
    const result = {
      name: name,
      email: email,
      password: password,
      state: state,
      occupation: occupation,
    };
    axios
      .post("https://frontend-take-home.fetchrewards.com/form", result)
      .then((res) => console.log(res));
  };
  const mapOccupations = () =>
    occupations.map((job, index) => (
      <option value={job} key={index}>
        {job}
      </option>
    ));

  const mapStates = () =>
    states.map((state, index) => (
      <option value={state.name} key={index} id={state.name}>
        {state.name}
      </option>
    ));
  return (
    <div className="App">
      <h1>App</h1>
      <form className="main-form" onSubmit={handleSubmit}>
        {/* full name label & input */}
        <div>
          <label htmlFor="name">Full Name</label>
          <input className="form-input" type="text" id="name" required />
        </div>
        {/* email label & input */}
        <div>
          <label htmlFor="email">Email</label>
          <input className="form-input" type="email" id="email" required />
        </div>
        {/* password  label & input */}
        <div>
          <label htmlFor="password">Password</label>
          <input
            className="form-input"
            type="password"
            id="password"
            required
          />
        </div>
        {/* occupation label & input */}
        <div>
          <label htmlFor="occupation">Occupation</label>
          <select className="form-input" id="occupation">
            <option>Please Select</option>
            {mapOccupations()}
          </select>
        </div>
        {/* state label & input */}
        <div>
          <label htmlFor="state">State</label>
          <select className="form-input" id="state" required>
            <option value="">Please Select</option>
            {mapStates()}
          </select>
        </div>
        <button className="sign-up-btn">submit</button>
      </form>
    </div>
  );
}

export default App;
