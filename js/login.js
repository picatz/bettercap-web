var gopherImage = b.image({ 
  src:"https://i.imgur.com/h2Ulqmu.png", 
  alt:"gopher" 
})

var pleaseLoginText = b.paragraph({ 
  class: "subtitle has-text-grey", 
  text: "Please login to proceed." 
})

var userField = b.div({ 
  class: "field",
  html: b.div({
    class: "control",
    html: b.input({ class: "input is-large", id: "user", type: "text", placeholder: "User" }) 
  })
})

var passwordField = b.div({
  class: "field",
  html: b.div({
    class: "control",
    html: b.input({ class: "input is-large", id: "password", type: "password", placeholder: "Password" }) 
  })
})

var loginErrorWarning = b.div({
  class: "notification is-warning",
  html: b.button({ 
    class: "delete", 
    events: {
      click: function() {
        loginForm.removeChild(loginErrorWarning)
      }
    }
  }),
  text: "Unable to login!"
})

var loginButton = b.hyperlink({
  id: "loginButton",
  class: "button is-block is-info is-large", 
  text: "Login",
  events: {
    click: function() {
      document.getElementById("loginButton").classList.add("is-loading")
      var user = document.getElementById("user").value
      var pass = document.getElementById("password").value
      console.log("Attempting to login...")
      setCredentials({ username: user, password: pass })
      check = getSession()
      check.then(function() {
        if (session == null) {
          console.log("unable to login!")
          document.getElementById("loginButton").classList.remove("is-loading")
          loginForm.prepend(loginErrorWarning)
        } else {
          console.log("logged in!")
          removeLoginContainer()
          addMainTabs()
        }
      })
    }
  }
})

var loginForm = b.div({
  class: "box",
  html: b.form({
    html: [
      userField,
      passwordField,
      loginButton
    ]
  })
})

var loginContainer = b.div({
  id: "loginContainer",
  class: "container has-text-centered",
  html: b.div({
    class: "column is-8 is-offset-2",
    html: [
      gopherImage,
      pleaseLoginText,
      loginForm
    ]
  })
})

function addLoginContainer() {
  b.append(loginContainer)
}

function removeLoginContainer() {
  document.body.removeChild(loginContainer)
}
