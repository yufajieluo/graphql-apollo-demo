const { ModelDuty } = require('../datasource/mongodb/duty')
const { GraphMongo } = require('./base')

class Duty extends GraphMongo {
    constructor(){
        super(ModelDuty)
    }
}

module.exports = { Duty }