const express = require('express');
const axios = require('axios');
const util = require('util');
const router = express.Router();

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

router.get('/hotels/:hotelId/questions', (req, res, next) => {
  const { hotelId } = req.params;
  axios.get(`http://node-express-env-service-qa.swpb5j5env.us-west-2.elasticbeanstalk.com/hotels/${hotelId}/questions`)
  .then(response => {
    res.send(response.data);
  });
});

router.delete('/hotels/:hotelId/questions/:questionId', (req, res) => {
  const { questionId } = req.params;
  const { userId } = req.body;
  deleteQuestion(questionId, userId, res);
});


module.exports = router;
