const { configDatasource } = require('../config/datasource')
const { Park } = require('./park')
const { Duty } = require('./duty')
const { Employee } = require('./employee')
const { Department } = require('./department')
const { Account } = require('./account')

var park = new Park()
var duty = new Duty()
var employee = new Employee()
var department = new Department()
var account = new Account(configDatasource.rest.base)

const resolvers = {
    Query: {
        getPark: (parent, args, context, info) => { return park.get(args) },
        allPark: (parent, args, context, info) => { return park.all() },
        pagPark: (parent, args, context, info) => { return park.page(args) },

        getDepartment: (parent, args, context, info) => { return department.get(args) },
        allDepartment: (parent, args, context, info) => { return department.all() },
        pagDepartment: (parent, args, context, info) => { return department.page(args) },

        getDuty: (parent, args, context, info) => { return duty.get(args) },
        allDuty: (parent, args, context, info) => { return duty.all() },
        pagDuty: (parent, args, context, info) => { return duty.page(args) },

        getEmployee: (parent, args, context, info) => { return employee.get(args) },
        allEmployee: (parent, args, context, info) => { return employee.all() },
        pagEmployee: (parent, args, context, info) => { return employee.page(args) },
        
        getAccount: (parent, args, context, info) => { return account.get(configDatasource.rest.url.accountDetail, args)},
        allAccount: (parent, args, context, info) => { return account.all(configDatasource.rest.url.sysAccount)},
        pagAccount: (parent, args, context, info) => { return account.page(configDatasource.rest.url.account, args)},
    },

    Mutation: {
        addPark: (parent, args, context, info) => { return park.add(args) },
        updPark: (parent, args, context, info) => { return park.upd(args) }, 
        delPark: (parent, args, context, info) => { return park.del(args) },

        addDepartment: (parent, args, context, info) => { return department.add(args) },
        updDepartment: (parent, args, context, info) => { return department.upd(args) },  
        delDepartment: (parent, args, context, info) => { return department.del(args) },

        addDuty: (parent, args, context, info) => { return duty.add(args) },
        updDuty: (parent, args, context, info) => { return duty.upd(args) }, 
        delDuty: (parent, args, context, info) => { return duty.del(args) },

        addEmployee: (parent, args, context, info) => { return employee.add(args) },
        updEmployee: (parent, args, context, info) => { return employee.upd(args) }, 
        delEmployee: (parent, args, context, info) => { return employee.del(args) },

        addAccount: (parent, args, context, info) => { return account.add(configDatasource.rest.url.account, args) },
        updAccount: (parent, args, context, info) => { return account.upd(configDatasource.rest.url.account, args) },
        delAccount: (parent, args, context, info) => { return account.del(configDatasource.rest.url.account, args) }
    }
    
}

module.exports = { resolvers }