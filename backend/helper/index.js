
const crypto = require('crypto')

const createRandomStringUrl = () => {
    return crypto.randomUUID();
}

module.exports = {
    createRandomStringUrl
}