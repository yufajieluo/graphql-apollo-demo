const { ControllerMySQL } = require('./base')
const { ModelPark } = require('../datasource/mysql/park')

class Park extends ControllerMySQL {
    constructor(){
        super(ModelPark)
    }
}

module.exports = {
    Park
}