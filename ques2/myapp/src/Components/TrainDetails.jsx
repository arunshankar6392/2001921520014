import React from 'react';
import { useParams } from 'react-router-dom';

const TrainDetails = ( {trainList} ) => {
  const { trainNumber } = useParams();
  console.log(trainList)

  // Find the selected train in the trainList based on trainNumber
  const selectedTrain = trainList.find(train => train.trainNumber === trainNumber);

  return (
    <div>
      {selectedTrain ? (
        <div>
          <h1>Train Details</h1>
          <p>Train Name: {selectedTrain.trainName}</p>
          <p>Train Number: {selectedTrain.trainNumber}</p>
          {/* Display other train details */}
        </div>
      ) : (
        <p>Train not found</p>
      )}
    </div>
  );
};

export default TrainDetails;