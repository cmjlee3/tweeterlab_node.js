const router = require('express').Router();
const { getAllTweets,
        getAllUserTweets,
        getAllHashTagTweets } = require('../models/tweets');

router.get('/', getAllTweets, (req, res) => {
  res.json(res.rows);
});
router.get('/user/:username', getAllUserTweets, (req, res) => {
  res.json(res.rows);
});
router.get('/hashtag/:hashTag', getAllHashTagTweets, (req, res) => {
  res.json(res.rows);
});

module.exports = router;
