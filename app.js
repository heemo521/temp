$(document).ready(function() {
  // Select already existing elements
  var $app = $('#app');
  $app.empty();

  // Create new HTML elements
  var $title = $('<h1>Twiddler</h1>');
  var $feed = $('<div id = "feed"></div>')
  var $updateFeedBtn = $('<button id = "update-feed">Update Feed</button>');


  // Create event handler functions
  var handleTitleClick = function(e) {
    alert('The title of this page is: ' + e.target.innerText);
  }

  var handleUsernameClick = function(e) {
    if (e.target.className === 'username') {
      var clicekdUsername = e.target.innerText.replace(/[^a-z]/ig, '');
      renderFeed(clicekdUsername);
      $('#update-feed').text('Back');
    }
  }

  var addElementsToContainer = function(eleArr, ctn) {
    eleArr.forEach(ele => ele.appendTo(ctn));
  }

  var createElement = function()

  var createTweetElement = function(tweet) {
    //Containers & Elements
    var $tweet = $('<div class="tweet"></div>');

    var $profilePhoto = $('<img class="profile-photo"></img>');
    var $username = $('<div class="username"></div>');
    var $message = $('<div class="message"></div>');
    var $timeStamp = $('<div class="timestamp"></div>');
    var $icons = $('<div class="icons"></div>');
    var $comment = $('<i class="fas fa-comment icon comment"></i>');
    var $retweet = $('<i class="fas fa-retweet icon retweet"></i>');
    var $like = $('<i class="fas fa-heart icon like"></i>');
    var $share = $('<i class="fas fa-share icon share"></i>');

    $profilePhoto.attr('src', tweet.profilePhotoURL);
    $username.text('@' + tweet.user);
    $message.text(tweet.message);
    $timeStamp.text($.timeago(tweet.created_at));

    addElementsToContainer([$comment, $retweet, $like, $share], $icons);
    addElementsToContainer([$profilePhoto, $username, $message, $timeStamp, $icons], $tweet);

    return $tweet;
  }

  var renderFeed = function(user) {
    var selectedFeed = user ? streams.users[user] : streams.home;
    $($feed).empty();
    var index = selectedFeed.length - 1;
    while(index >= 0){
      var tweet = selectedFeed[index];
      createTweetElement(tweet).appendTo($feed);
      index -= 1;
    }gi
  }

  var handleFeedUpdate = function(e) {
    e.preventDefault();
    $('#update-feed').text() === 'Back' && $updateFeedBtn.text('Update Feed');
    renderFeed();
  }

  // Set event listeners (providing appropriate handlers as input)
  $title.on("click", handleTitleClick);
  $updateFeedBtn.on('click', handleFeedUpdate);
  $feed.on('click', handleUsernameClick)


  // Append new HTML elements to the DOM
  $title.appendTo($app);
  $updateFeedBtn.appendTo($app);
  $feed.appendTo($app);


  var init = function () {
    renderFeed();
  }

  init();
});

/*
Advanced Requirements (Extra Credit)
Implementing the Friends List and New Tweet Form components, both their UI and UX, is extra credit and will be covered in greater depth in the optional Advanced Requirements unit.

To give you some foresight into what's coming up, here are the additional bits of structure and interactivity our users will experience once the extra credit is complete:

User Interface (Extra Credit)
A Friends List, with a list view of each of the user's friends' usernames.
A New Tweet Form, complete with a:
Username Input Label
Username Input Field
Message Input Label
Message Input Field
Submit Button
User Experience (Extra Credit)
Clicking a friend's username inside the Friends List to re-render the Feed with the most current list of that specific user's Tweets.
Typing their own Username and Tweet Message into the Tweet Form, and then clicking the Submit Button to create a new Tweet, which should:
Create and store a new Tweet object in the appropriate streams of the Back End code.
Immediately update the Home Feed.
Immediately update the Friends List, if and only if this user has never tweeted before.
*/