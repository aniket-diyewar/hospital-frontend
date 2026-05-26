import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetchPatients();
  }, []);

  const fetchPatients = async () => {
    const response = await axios.get("http://localhost:8080/patients");
    setPatients(response.data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Hospital Management System</h1>

      {patients.map((patient) => (
        <div key={patient.id}>
          <h3>{patient.name}</h3>
          <p>Age: {patient.age}</p>
          <p>Disease: {patient.disease}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;