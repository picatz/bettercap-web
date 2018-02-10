var mainContent = b.div({
  class: "container",
  id: "mainContent"
})

function addMainContent() {
  b.append(mainContent)
}

function addToMainContent(content) {
  mainContent.append(content)
}

function clearMainContent() {
  while (mainContent.firstChild) {
    mainContent.removeChild(mainContent.firstChild);
  }
}

function removeLastMainContent() {
  if ( mainContent.childElementCount > 0 ) {
    mainContent.removeChild(mainContent.lastElementChild);
  }
}

function removeMainContent() {
  document.body.removeChild(mainContent)  
}
