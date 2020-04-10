const { rspMsg } = require('../resp')
const { ControllerMongo } = require('./base')
const { ModelDuty } = require('../datasource/mongodb/duty')

class Duty extends ControllerMongo {
    constructor(){
        super(ModelDuty)
    }
}

module.exports = {
    Duty
}