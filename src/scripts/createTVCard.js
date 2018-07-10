const containerDiv = document.getElementById("showList")

const createTVCard = (id, title, plotSummary, seasonNumber) => {
    let card = document.createElement("div")
    card.className = "newShow"
    card.id = id

    const showsTitle = document.createElement("h3")
    showsTitle.textContent = title

    let summary = document.createElement("p")
    summary.textContent = plotSummary

    let seasons = document.createElement("h6")
    seasons.textContent = seasonNumber

    let checkbox = document.createElement("INPUT")
    checkbox.setAttribute("type", "checkbox")
    checkbox.setAttribute("id", "checkBox")

    let watchedTag = document.createElement("label")
    watchedTag.textContent = "Watched"

    let editBtn = document.createElement("BUTTON")
    editBtn.textContent = "Edit"
    editBtn.setAttribute("id", "editBtn")

    let removeBtn = document.createElement("BUTTON")
    removeBtn.textContent = "Remove"
    removeBtn.setAttribute("class", "removeBtn")

    card.appendChild(showsTitle)
    card.appendChild(summary)
    card.appendChild(seasons)
    card.appendChild(checkbox)
    card.appendChild(watchedTag)
    card.appendChild(editBtn)
    card.appendChild(removeBtn)
    // console.log(card)

    containerDiv.appendChild(card)

    return containerDiv

}

module.exports = createTVCard;

