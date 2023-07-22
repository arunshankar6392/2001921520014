import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AllTrains from "./Components/AllTrains"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrainDetails from './Components/TrainDetails';

function App() {
  const [trainList, setTrainList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/trainlist");
      console.log(response);
      setTrainList(response.data);
    } catch (error) {
      console.log(error.response);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<AllTrains />} />
          <Route path="/trains/:trainNumber" element={<TrainDetails trainList={trainList} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
