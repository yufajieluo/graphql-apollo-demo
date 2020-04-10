const { gql } = require('apollo-server-koa');

const typeDefs = gql`
    schema {
        query: Query
        mutation: Mutation  
        # subscription: Subscription
    }

    type Query {
        getPark(id: Int): Park,
        allPark: [Park],
        pagPark(pageSize: Int, pageNo: Int): PaginationPark,

        getDepartment(id: String): Department,
        allDepartment: [Department],
        pagDepartment(pageSize: Int, pageNo: Int): PaginationDepartment
        
        getDuty(id: String): Duty,
        allDuty: [Duty],
        pagDuty(pageSize: Int, pageNo: Int): PaginationDuty
    
        getEmployee(id: String): Employee,
        allEmployee: [Employee],
        pagEmployee(pageSize: Int, pageNo: Int): PaginationEmployee

        getAccount(id: Int): Account
        allAccount: [Account],
        pagAccount(pageSize: Int, pageNo: Int): PaginationAccount
    }

    type Mutation {
        addPark(name: String, addr: String): String
        delPark(id: Int, name: String): String
        updPark(id: Int, name: String, addr: String): String
       
        addDepartment(name: String, desc: String): String
        delDepartment(id: String): String
        updDepartment(id: String, name: String, desc: String): String

        addDuty(department_id: String, name: String, desc: String): String
        delDuty(id: String): String
        updDuty(id: String, department_id: String, name: String, desc: String): String

        addEmployee(
            duty_id: String,
            name: String,
            sex: String,
            age: Int,
            wife: WifeInput,
            house: [HouseInput]
        ): String
        delEmployee(id: String): String
        updEmployee(
            id: String,
            duty_id: String,
            name: String,
            sex: String,
            age: Int,
            wife: WifeInput,
            house: [HouseInput]
        ): String

        addAccount(user_name: String, real_name: String, user_pass: String): String
        delAccount(user_id: Int): String
        updAccount(user_id: Int, real_name: String): String
    }

    type Pagination {
        pageSize: Int
        totalNums: Int
        totalPages: Int
        pageNo: Int
        nextPage: Int
        previousPage: Int
    }

    type Park {
        id: Int
        name: String
        addr: String
        create_time: String
        regions: [Region]
    }

    type PaginationPark {
        pagination: Pagination
        datas: [Park]
    }

    type Region {
        id: Int
        park_id: Int
        name: String
        area: Float
        create_time: String
    }

    type Department {
        id: String
        name: String
        desc: String
        create_time: String
        modify_time: String
    }

    type PaginationDepartment {
        pagination: Pagination
        datas: [Department]
    }

    type Duty {
        id: String
        department_id: String
        name: String
        desc: String
    }

    type PaginationDuty {
        pagination: Pagination
        datas: [Duty]
    }

    type Employee {
        id: String
        duty_id: String
        name: String
        sex: String
        age: Int
        wife: Wife
        house: [House]
    }

    type PaginationEmployee {
        pagination: Pagination
        datas: [Employee]
    }

    type Wife {
        name: String
        age: Int
    }

    type House {
        addr: String
        area: Float
    }

    input AddEmployeeInput {
        duty_id: String
        name: String
        sex: String
        age: Int
        wife: WifeInput
        house: [HouseInput]
    }

    input UpdEmployeeInput {
        id: String
        duty_id: String
        name: String
        sex: String
        age: Int
        wife: WifeInput
        house: [HouseInput]
    }

    input WifeInput {
        name: String
        age: Int
    }

    input HouseInput {
        addr: String
        area: Float
    }

    type Account {
        id: Int
        role_id: Int
        park_id: Int
        pswd: String
        name: String
        real_name: String
        create_time: String
    }

    type PaginationAccount {
        pagination: Pagination
        datas: [Account]
    }
`

module.exports = { typeDefs }