const db = require('../lib/dbconnect');

function getAllTweets(req, res, next) {
  db.query('SELECT * FROM tweets;')
  .then((rows) => {
    res.rows = rows;
    next();
  })
  .catch(error => next(error));
};

function getAllUserTweets(req, res, next) {
  db.query(`SELECT * FROM tweets LEFT JOIN users
    ON (tweets.user_id = users.user_id)
    WHERE users.username = $/username/;`, req.params)
  .then((rows) => {
    res.rows = rows;
    next();
  })
  .catch(err => next(err));
};

function getAllHashTagTweets(req, res, next) {
  // console.log(`'%#${req.params.hashTag}%'`);
  db.query("SELECT * FROM tweets WHERE content ILIKE ${hashtag}", {
    hashtag: '%#' + req.params.hashTag + '%'
  })
  .then((rows) => {
    res.rows = rows;
    next();
  })
  .catch(err => next(err));
};

module.exports = {
  getAllTweets,
  getAllUserTweets,
  getAllHashTagTweets,
};
