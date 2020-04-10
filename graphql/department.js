const { ModelDepartment } = require('../datasource/mongodb/department')
const { GraphMongo } = require('./base')

class Department extends GraphMongo {
    constructor(){
        super(ModelDepartment)
    }
}

module.exports = {
    Department
}