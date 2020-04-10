const { ControllerMongo } = require('./base')
const { ModelDepartment } = require('../datasource/mongodb/department')

class Department extends ControllerMongo {
    constructor(){
        super(ModelDepartment)
    }
}

module.exports = {
    Department
}