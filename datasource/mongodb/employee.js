const { Base } = require('./base')
const { employee } = require('./model')

class ModelEmployee extends Base {
    constructor(){
        super(employee)
    }
}

module.exports = { ModelEmployee }