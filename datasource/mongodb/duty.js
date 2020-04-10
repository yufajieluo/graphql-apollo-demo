const { Base } = require('./base')
const { duty } = require('./model')

class ModelDuty extends Base {
    constructor(){
        super(duty)
    }
}

module.exports = { ModelDuty }