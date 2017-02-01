function renderTweets (tweets){
  let tc = document.getElementById('tweet-container');
  while(tc.firstChild) {
    tc.removeChild(tc.firstChild);
  }
  for(let i = 0; i < tweets.length; i++) {
    let newTweet = document.createElement('div');
    newTweet.setAttribute('class', 'tweet');
    newTweet.appendChild(document.createTextNode(tweets[i].content));
    tc.appendChild(newTweet);
  }
}

function getAllTweets() {
  return fetch('/tweets/')
    .then(r => r.json());
}

(() => {
getAllTweets().then(renderTweets);
})();

