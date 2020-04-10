const { rspMsg } = require('../resp')
const { ControllerMongo } = require('./base')
const { ModelEmployee } = require('../datasource/mongodb/employee')

class Employee extends ControllerMongo {
    constructor(){
        super(ModelEmployee)
    }
}

module.exports = {
    Employee
}