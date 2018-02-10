function interfaceCard() {
  return b.div({
    html: b.div({
      class: "card",
      html: [
        b.div({
          class: "card-content",
          html: b.div({
            class: "content",
            html: [
              b.paragraph({ class: "subtitle", text: "NAME" }),
              b.paragraph({ class: "title", text: session.interface.hostname || "N/A" }),
              b.paragraph({ class: "subtitle", text: "MAC" }),
              b.paragraph({ class: "title", text: session.interface.mac || "N/A" }),
              b.paragraph({ class: "subtitle", text: "IPv4" }),
              b.paragraph({ class: "title", text: session.interface.ipv4 || "N/A" }),
              b.paragraph({ class: "subtitle", text: "IPv6" }),
              b.paragraph({ class: "title", text: session.interface.ipv6 || "N/A" })
            ]
          })
        })
      ]
    })
  })
}

function addInterfaceContent() {
  addToMainContent(interfaceCard())
}
