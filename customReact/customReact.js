const rootElement = document.querySelector("#root")

function renderReactElement(customReact, rootElement){
    const createElement = document.createElement(customReact.tag)
    for (const prop in customReact.attributes) {
        createElement.setAttribute(prop, customReact.attributes[prop])
    }
    createElement.textContent = customReact.content
    rootElement.appendChild(createElement)
}


const customReact = {
    tag: "a",
    attributes: {
        href: "https://github.com/MesumBinShaukat",
        target: "_blank"
    },
    content: "Mesum Bin Shaukat"
}

renderReactElement(customReact, rootElement)