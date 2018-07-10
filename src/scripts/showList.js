const saveNload = require("./saveNloadDatabase");
const CreateCard = require("./createTVCard");
const clear = require("./clearDOM")

const showList =() => {
        saveNload.getShow()
            .then(showData => {
                clear("#showList")
                for (let i in showData) {
                    CreateCard(showData[i].id, showData[i].title, showData[i].plotSummary, showData[i].seasonNumber);

                }
            })
    }

module.exports = showList;