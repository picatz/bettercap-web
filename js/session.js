var session = null;
var credentials = null;
var resp = null;

function encodeBasicAuthorizationCredentials(options = {}) {
  return 'Basic ' + btoa(options.username + ":" + options.password)
}

function setCredentials(options = {}) {
  credentials = encodeBasicAuthorizationCredentials(options)
}

function getSession() {
  return fetch("/api/session", { method: 'GET', headers: { 'Authorization': credentials } })
    .then(function(response) {
      response.json().then(function(json) { session = json })
    });
}

function setSession(data) {
  var request = new Request("/api/session", {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Authorization': credentials
    }
  });
  fetch(request).then(function(response) {
    response.json().then(function(json) { resp = json })
  });
}

//setCredentials({ username: "bcap", password: "bcap" })
//check = getSession(
//check.then(function() {
//  if (session == null) {
//    console.log("failed to login!")
//  }
//})
//session
//data = {"cmd":"net.probe on"}
//setSession(data)
