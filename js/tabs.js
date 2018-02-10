function setActiveTab(tab) {
  tab.classList.add("is-active")
}

function unsetActiveTabs() {
  for (var i = 0; i < tabList.childElementCount; i++) {
    tabList.childNodes[i].classList.remove("is-active")
  }
}

var interfaceTab = b.listItem({
  html: b.hyperlink({
    text: "Interface",
    events: {
      click: function() {
        unsetActiveTabs()
        setActiveTab(interfaceTab)
        clearMainContent()
        addInterfaceContent()
      }
    }
  })
})

var statisticsTab = b.listItem({ 
  html: b.hyperlink({
    text: "Statistics",
    events: {
      click: function() {
        unsetActiveTabs()
        setActiveTab(statisticsTab)
        clearMainContent()
        addToMainContent(b.heading({ text: "example" }))
      }
    }
  })
})

var gatewayTab = b.listItem({ 
  html: b.hyperlink({
    text: "Gateway",
    events: {
      click: function() {
        unsetActiveTabs()
        setActiveTab(gatewayTab)
        clearMainContent()
        addToMainContent(b.heading({ text: "example" }))
      }
    }
  })
})

var targetsTab = b.listItem({ 
  html: b.hyperlink({
    text: "Targets",
    events: {
      click: function() {
        unsetActiveTabs()
        setActiveTab(targetsTab)
        clearMainContent()
        addTargetsContent()
      }
    }
  })
})

var eventsTabs = b.listItem({ 
  html: b.hyperlink({
    text: "Events",
    events: {
      click: function() {
        unsetActiveTabs()
        setActiveTab(eventsTabs)
        clearMainContent()
        addToMainContent(b.heading({ text: "example" }))
      }
    }
  })
})

var tabList = b.unOrderedList({
  id: "tabList",
  html: [
    interfaceTab,
    statisticsTab,
    gatewayTab,
    targetsTab,
    eventsTabs
  ]
})

var mainTabs = b.div({
  class: "tabs",
  html: b.div({
    class: "container",
    html: tabList
  })
})

function addMainTabs() { 
  addToMainContent(mainTabs)
  setActiveTab(interfaceTab)
  changeToInterfaceHero 
}

function removeMainTabs() {
   document.body.removeChild(mainTabs)  
}
