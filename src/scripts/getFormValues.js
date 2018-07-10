const saveNLoad = require("./saveNloadDatabase")

const showFormValue = () => {
      const showTitle = document.querySelector("#showTitle").value
      const plotSummary = document.querySelector("#plotSummary").value
      const seasonNumber = document.querySelector("#seasonNumber").value
      saveNLoad.postShow(showTitle, plotSummary, seasonNumber)
        .then(response => {
          console.log(response)
        })
    }

    module.exports = showFormValue;