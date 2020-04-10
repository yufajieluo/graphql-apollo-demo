const { ModelEmployee } = require('../datasource/mongodb/employee')
const { GraphMongo } = require('./base')

class Employee extends GraphMongo {
    constructor(){
        super(ModelEmployee)
    }
}

module.exports = { Employee }