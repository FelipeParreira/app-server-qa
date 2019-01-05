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

// GET questions for a certain hotel
router.get('/hotels/:hotelId/questions', (req, res) => {
  const { hotelId } = req.params;
  getAllQuestions(hotelId, res);
});

// POST a question to a hotel
router.post('/hotels/:hotelId/questions', (req, res) => {
  const { hotelId } = req.params;
  const { postedDate, content, userId } = req.body;
  // postedDate should be in the format: yyyy/mm/dd (as a string)
  postQuestion(hotelId, Number(userId), postedDate, content, res);
});

// DELETE a question for a hotel
router.delete('/hotels/:hotelId/questions/:questionId/:userId', (req, res) => {
  const { questionId, userId } = req.params;
  // const { userId } = req.body;
  // res.send([questionId, userId]);
  // res.send(['qwerty']);
  deleteQuestion(Number(questionId), Number(userId), res);
});

// // POST a report for a certain question
router.post('/hotels/:hotelId/questions/:questionId/reports', (req, res) => {
  // the following function is just a stub
  // since our Q&A module is not able to retrieve reports,
  // we are not saving anything; you can implement this in the future if you want.
  postReportForQuestion(res);
});

// // POST an answer for a certain question
router.post('/hotels/:hotelId/questions/:questionId/answers', (req, res) => {
  const { questionId } = req.params;
  const { content, userId } = req.body;
  postAnswer(questionId, userId, content, res);
});

// DELETE an answer for a certain question
router.delete('/hotels/:hotelId/questions/:questionId/answers/:answerId/:userId', (req, res) => {
  const { answerId, userId } = req.params;
  // const { userId } = req.body;
  deleteAnswer(Number(answerId), Number(userId), res);
});

// Upvote or downvote a certain answer to a particular question
router.patch('/hotels/:hotelId/questions/:questionId/answers/:answerId/votes', (req, res) => {
  // vote should be 1 or -1
  const { vote } = req.body;
  const { answerId } = req.params;
  voteAnswer(Number(answerId), Number(vote), res);
});

// POST a report for a certain answer
router.post('/hotels/:hotelId/questions/:questionId/answers/:answerId/reports', (req, res) => {
  // the following function is just a stub
  // since our Q&A module is not able to retrieve reports,
  // we are not saving anything; you can implement this in the future if you want.
  postReportForAnswer(res);
});

// POST a message for a certain user
router.post('/users/:userId/messages', (req, res) => {
  // the following function is just a stub
  // since our Q&A module is not able to retrieve messages,
  // we are not saving anything; you can implement this in the future if you want.
  postMessageToUser(res);
});



module.exports = router;
