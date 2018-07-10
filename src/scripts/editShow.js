const saveNLoad = require("./saveNloadDatabase")
const showList = require("./showList")


const DOMshowList = document.getElementById("showList")

DOMshowList.addEventListener("click", () => {
    if (event.target.className === "editBtn") {
        let showId = event.target.parentNode.id
        console.log(showId)

        saveNLoad.editShow(showId)
        .then(() => {
            showList()
        })
    }
})