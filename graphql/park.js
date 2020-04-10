const { ModelPark } = require('../datasource/mysql/park')
const { GraphMySQL } = require('./base')

class Park extends GraphMySQL{
    constructor(){
        super(ModelPark)
    }
}

module.exports = { Park }