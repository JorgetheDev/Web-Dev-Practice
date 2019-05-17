var database =
[
  {
    username: "jorge",
    password: "password"
  }
];

var newsFeed =
[
  {
    username: "Bobby",
    timeline: "Tired asf"
  },
  {
  username: "Sindy",
  timeline: "boop"
  }
];


var userNamePrompt = prompt("What is your username");
var passwordPrompt = prompt("What is your password");

function signIn(user, pass)
{
  if(user === database[0].username && pass === database[0].password)
  {
    for(var i = 0; i < newsFeed.length; i++)
    {
      alert(newsFeed[i].username + " " + newsFeed[i].timeline);
    }
  }
  else
  {
    alert("Incorrect credentials.");
  }
}

signIn(userNamePrompt, passwordPrompt);
