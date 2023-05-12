const store = require('./store');

const listCategories = () => {
    return store.list()
}

module.exports = {
    listCategories
}