const getFormValues = require("./getFormValues")
const CardList = require("./showList")
const clear = require("./clearDOM")

const valueAndList = () => {
        getFormValues();
        clear("#showList");
        CardList();
    }

    module.exports = valueAndList;