import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const AllTrains = () => {
    
    const [trainList, setTrainList] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get("http://localhost:3001/trainlist");
            console.log(response)
            setTrainList(response.data);
        } catch (error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    

  return (
    <div>
      <h1>Train Schedule</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Train Name</th>
            <th scope="col">Train Number</th>
            <th scope="col">Departure Time</th>
            <th scope="col">Seats Available</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {trainList.map((train, index) => (
            <tr key={index}>
              <td>
                {/* Add a link to the detailed train information page */}
                <Link to={`/trains/${train.trainNumber}`}>{train.trainName}</Link>
              </td>
              <td>{train.trainNumber}</td>
              <td>{`${train.departureTime.Hours}:${train.departureTime.Minutes}`}</td>
              <td>{`Sleeper: ${train.seatsAvailable.sleeper}, AC: ${train.seatsAvailable.AC}`}</td>
              <td>{`Sleeper: ${train.price.sleeper}, AC: ${train.price.AC}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AllTrains;