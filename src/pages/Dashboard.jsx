import { useEffect, useState } from "react";
import API from "../services/api";

function Dashboard() {

  const [patients, setPatients] = useState([]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [disease, setDisease] = useState("");

  const fetchPatients = async () => {
    const response = await API.get("/patients");
    setPatients(response.data);
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  const addPatient = async () => {

    await API.post("/patients", {
      name,
      age,
      disease
    });

    fetchPatients();

    setName("");
    setAge("");
    setDisease("");
  };

  return (
    <div style={{padding:"30px"}}>

      <h1>Hospital Management System</h1>

      <h2>Add Patient</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Age"
        value={age}
        onChange={(e)=>setAge(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Disease"
        value={disease}
        onChange={(e)=>setDisease(e.target.value)}
      />

      <br /><br />

      <button onClick={addPatient}>
        Add Patient
      </button>

      <hr />

      <h2>Patient List</h2>

      {
        patients.map((p)=>(
          <div key={p.id}>
            <h3>{p.name}</h3>
            <p>Age: {p.age}</p>
            <p>Disease: {p.disease}</p>
            <hr />
          </div>
        ))
      }

    </div>
  );
}

export default Dashboard;