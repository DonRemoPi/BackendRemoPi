const Model = require('./model.js');

const listCategories = () => {
    return Model.find()
}

module.exports = {
    list: listCategories,
}