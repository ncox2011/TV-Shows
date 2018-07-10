const $ = require("jquery")
const archiveShow = require("./saveNloadDatabase")

const DOMshowList = document.getElementById("showList")

DOMshowList.addEventListener("click", () => {
    if (event.target.id === "checkBox") {
        let watchedShow = event.target.parentNode
        watchedShow.className = "watched"

        let watchedShowId = event.target.parentNode.id
        archiveShow.archiveShow(watchedShowId)
    }
})

