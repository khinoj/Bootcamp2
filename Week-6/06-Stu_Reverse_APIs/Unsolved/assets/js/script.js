var requestUrl = 'https://api.github.com/orgs/Netflix/repos';

// JQuery AJAX
// TODO: Comment on how AJAX returns an API call 

$.ajax({
  url: requestUrl, // grabs url
  method: 'GET', // get url ?
}).then(function (response) { 
  console.log('AJAX Response \n-------------');
  console.log(response); //ouput
});

// Browser Fetch Method
// TODO: Comment on how Fetch returns an API call
fetch(requestUrl) // fetch apis
  .then(function (response) { // return promise, taking data and storing as repsonse. 
    return response.json(); //make response into json
  })
  .then(function (data) { // json is data now
    console.log('Fetch Response \n-------------');
    console.log(data);
  });

// Browser XMLHttpRequest
// TODO: Comment on how XMLHttpRequest returns an API call
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// TODO: Comment on the differences on the format of the data that was returned
