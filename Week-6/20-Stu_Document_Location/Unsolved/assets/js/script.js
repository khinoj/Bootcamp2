var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  // If that status equals the conditional, then redirect to the 404 page.
  console.log(response);
  console.log(response.status);
  if (response.status === 404) {
    document.location.href = 'https://www.ign.com'
  } else {
    return response.json();
  }
});
