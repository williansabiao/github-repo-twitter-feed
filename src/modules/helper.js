const organizeTweets = (tweets) => {
  let newList = {};

  for(let i = 0, n = tweets.length; i < n; i++) {
    newList[decodeURIComponent(tweets[i].search_metadata.query)] = tweets[i];
  }

  return newList;
};

module.exports = {
  organizeTweets,
};