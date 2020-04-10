configDatasource = {
    mysql: {
        conn: {
            host: '10.100.101.19',
            port: 3306,
            user: 'graphql',
            pswd: 'graphql',
            database: 'graphql'
        },
        models: [
            {
                table: 'park',
                feilds: [
                    {name: 'id', type: 'INTEGER', primary: true},
                    {name: 'name', type: 'STRING(128)'},
                    {name: 'addr', type: 'STRING(128)'},
                    {name: 'create_time', type: 'STRING(19)'}
                ]
            },
            {
                table: 'region',
                feilds: [
                    {name: 'id', type: 'INTEGER', primary: true},
                    {name: 'park_id', type: 'INTEGER'},
                    {name: 'name', type: 'STRING(128)'},
                    {name: 'area', type: 'FLOAT'},
                    {name: 'create_time', type: 'STRING(19)'}
                ]
            },
            {
                table: 'department',
                feilds: [
                    {name: 'id', type: 'INTEGER', primary: true},
                    {name: 'park_id', type: 'INTEGER'},
                    {name: 'name', type: 'STRING(128)'},
                    {name: 'create_time', type: 'STRING(19)'}
                ]
            },
            {
                table: 'duty',
                feilds: [
                    {name: 'id', type: 'INTEGER', primary: true},
                    {name: 'park_id', type: 'INTEGER'},
                    {name: 'department_id', type: 'INTEGER'},
                    {name: 'name', type: 'STRING(128)'},
                    {name: 'create_time', type: 'STRING(19)'}
                ]
            },
            {
                table: 'employee',
                feilds: [
                    {name: 'id', type: 'INTEGER', primary: true},
                    {name: 'park_id', type: 'INTEGER'},
                    {name: 'department_id', type: 'INTEGER'},
                    {name: 'duty_id', type: 'INTEGER'},
                    {name: 'name', type: 'STRING(128)'},
                    {name: 'sex', type: 'STRING(8)'},
                    {name: 'age', type: 'INTEGER'},
                    {name: 'number', type: 'STRING(128)'},
                    {name: 'create_time', type: 'STRING(19)'},
                    {name: 'modify_time', type: 'STRING(19)'},
                ]
            },
        ]
    },

    mongo: {
        conn: 'mongodb://graphql-user:graphql-pass@10.100.101.18:27017/graphql',
        models: [
            {
                collection: 'department',
                feilds: {
                    name: 'String',
                    desc: 'String',
                    create_time: 'String',
                    modify_time: 'String'
                }
            },
            {
                collection: 'duty',
                feilds: {
                    department_id: 'String',
                    name: 'String',
                    desc: 'String'
                }
            },
            {
                collection: 'employee',
                feilds: {
                    duty_id: 'String',
                    name: 'String',
                    sex: 'String',
                    age: 'Number',
                    wife:{name: 'String', age: 'Number'},
                    house:[{addr: 'String', area: 'Number'}]
                }
            },
        ]
    },
    
    rest:{
        base: 'http://127.0.0.1:8082/guard',
        url: {
            account: '/user/',
            accountDetail: '/user/detail/',
            sysAccount: '/sys/user/'
        }
    }
}

module.exports = { configDatasource }