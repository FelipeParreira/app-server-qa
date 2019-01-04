var express = require('express');
var router = express.Router();

// import the models
const {
  Users, ReviewDistributions, Questions, Answers,
} = require('../db/models');

// import the db connection
const db = require('../db/index');

// import helper query functions
const {
  getAllQuestions,
  postQuestion,
  deleteQuestion,
  postAnswer,
  deleteAnswer,
  voteAnswer,
  postReportForQuestion,
  postReportForAnswer,
  postMessageToUser,
} = require('../query');


router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,POST');
  next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// router.get('/testQA', (req, res) => {
  // db.sync()
  //   .then(() => {
  //     const promisedQuestions = Questions.findOne({
  //       raw: true,
  //       attributes: [['ID', 'QuestionID'], 'Content', 'PostedDate', 'UserID'],
  //     });
  //     return promisedQuestions;
  //   })
  //   .then(data => {
  //     console.log('data', data);
  //     res.send(data);
  //   })
  // res.send('Response from QA server!');
// });

router.get('/hotels/:hotelId/questions', (req, res) => {
  const { hotelId } = req.params;
  getAllQuestions(hotelId, res);
});

module.exports = router;
