const { Base } = require('./base')
const { department } = require('./model')

class ModelDepartment extends Base {
    constructor(){
        super(department)
    }
}

module.exports = { ModelDepartment }