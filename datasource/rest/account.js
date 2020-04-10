const { Base } = require('./base')

class RESTAccount extends Base {
    constructor(baseURL){
        super(baseURL)
    }
}

module.exports = { RESTAccount }