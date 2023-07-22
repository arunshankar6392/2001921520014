const express = require("express");
const TrainRouter = express.Router();

const TrainList=[{"trainName":"Lucknow Exp","trainNumber":"2347","departureTime":{"Hours":17,"Minutes":33,"Seconds":0},"seatsAvailable":{"sleeper":5,"AC":3},"price":{"sleeper":238,"AC":353},"delayedBy":12},{"trainName":"Pune Exp","trainNumber":"2342","departureTime":{"Hours":23,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":6,"AC":7},"price":{"sleeper":854,"AC":1854},"delayedBy":5},{"trainName":"Cochin Exp","trainNumber":"2348","departureTime":{"Hours":15,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":1,"AC":0},"price":{"sleeper":737,"AC":1024},"delayedBy":11},{"trainName":"Hyderabad Exp","trainNumber":"2341","departureTime":{"Hours":23,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":6,"AC":7},"price":{"sleeper":554,"AC":1854},"delayedBy":5},{"trainName":"Srinagar Exp","trainNumber":"2349","departureTime":{"Hours":14,"Minutes":55,"Seconds":0},"seatsAvailable":{"sleeper":1,"AC":0},"price":{"sleeper":887,"AC":974},"delayedBy":10},{"trainName":"Kolkata Exp","trainNumber":"2345","departureTime":{"Hours":20,"Minutes":15,"Seconds":0},"seatsAvailable":{"sleeper":16,"AC":70},"price":{"sleeper":510,"AC":610},"delayedBy":14},{"trainName":"Chennai Exp","trainNumber":"2344","departureTime":{"Hours":21,"Minutes":35,"Seconds":0},"seatsAvailable":{"sleeper":3,"AC":2},"price":{"sleeper":533,"AC":635},"delayedBy":15},{"trainName":"Mumbai Exp","trainNumber":"2343","departureTime":{"Hours":22,"Minutes":37,"Seconds":0},"seatsAvailable":{"sleeper":8,"AC":15},"price":{"sleeper":500,"AC":600},"delayedBy":0},{"trainName":"Amritsar Exp","trainNumber":"2346","departureTime":{"Hours":19,"Minutes":0,"Seconds":0},"seatsAvailable":{"sleeper":15,"AC":10},"price":{"sleeper":540,"AC":740},"delayedBy":13}]

TrainRouter.get("/", async (req, res) => {
    try {
      const response = TrainList;
      res.json(response);
    } catch (error) {
      res.json(error);
    }
  });

  module.exports=TrainRouter;