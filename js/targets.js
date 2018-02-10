function createTargetPanelTarget(target) {
  return b.hyperlink({
    class: "panel-block",
    text: target.mac
  })
}

function createSessionTargets() {
  var targets = []
  for (var key in session.targets.Targets) {
    var t = session.targets.Targets[key];
    targets.push(createTargetPanelTarget(t))
  }
  return targets
}

var targetPanelHeading = b.paragraph({
  class: "panel-heading",
  text: "Targets"
})

var targetPanelSearch = b.div({
  class: "panel-block",
  html: b.paragraph({ 
    class: "control has-icons-left", 
    html: [
      b.input({ 
        class: "input",
        type: "text",
        placeholder: "search"
      }),
      b.span({
        class: "icon is-small is-left",
        html: b.italic({ class: "fas fa-search" })
      })
    ]
  })
})
  

function tagetsPanel() {
  var n = b.div({ 
    class: "box",
    html: b.nav({
      class: "panel",
      style:"margin-bottom: 0px;",
      html: [
        targetPanelHeading,
        targetPanelSearch
      ]
    })
  })
  var t = createSessionTargets()
  for (var i in t) {
    b.append(t[i], { to: n })
  }
  return n
}

function addTargetsContent() {
  addToMainContent(tagetsPanel())
}
