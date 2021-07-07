import * as data from './obrazki1.json' assert {type: "json"}

const parsedData = JSON.parse(JSON.stringify(data.default))

const dataArray = Object.keys(parsedData).map(key => parsedData[key])

const container = document.createElement("div");
container.className = "container"
document.body.appendChild(container)

const createDiv = (val) => {
    const mainDiv = document.createElement("div")
    const topDiv = document.createElement("div")
    const logoDiv = document.createElement("div")
    const locationDiv = document.createElement("div")
    const midDiv = document.createElement("div")
    const bottomDiv = document.createElement("div")
    
    mainDiv.className = "mainDiv"
    topDiv.className="topDiv"
    logoDiv.className = "logoDiv"
    locationDiv.className = "locationDiv"
    midDiv.className = "midDiv"
    bottomDiv.className = "bottomDiv"
    locationDiv.innerHTML = val.location
    midDiv.innerHTML = val.header
    bottomDiv.innerHTML = val.header1
    topDiv.appendChild(logoDiv)
    topDiv.appendChild(locationDiv)
    mainDiv.appendChild(topDiv)
    mainDiv.appendChild(midDiv)
    mainDiv.appendChild(bottomDiv)
    container.appendChild(mainDiv)
}

dataArray.map((val) => {
    createDiv(val)   
})
