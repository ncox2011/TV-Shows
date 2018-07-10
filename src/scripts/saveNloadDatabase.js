const $ = require("jquery");

const Database = Object.create({}, {
    getShow: {
        value: () => {
            return $.ajax("http://localhost:3000/shows");
        }
    },
    postShow: {
        value: (title, plotSummary, seasonNumber) => {
            return $.ajax({
                url: "http://localhost:3000/shows",
                method: "POST",
                data: {
                    title: title,
                    plotSummary: plotSummary,
                    seasonNumber: seasonNumber
                }
            })
        }
    },
    editShow: {
        value: (title, plotSummary, seasonNumber) => {
            return $.ajax({
                url: "http://localhost:3000/shows",
                method: "PUT",
                data: {
                    title: title,
                    plotSummary: plotSummary,
                    seasonNumber: seasonNumber
                }
            })
        }
    },
    deleteShow: {
        value: id => {
            return $.ajax({
                url: `http://localhost:3000/shows/${id}`,
                method: "DELETE"
            })
        }
    },
    archiveShow: {
        value: id => {
            return $.ajax({
                url: `http://localhost:3000/shows/${id}`,
                method: "PATCH",
                data: {
                    watched: true
                }
            })
        }
    }
})

module.exports = Database;