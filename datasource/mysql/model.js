const Sequelize = require('sequelize');
const format = require('string.format');
const { configDatasource } = require('../../config/datasource');

var sequelize = new Sequelize(
    configDatasource.mysql.conn.database,
    configDatasource.mysql.conn.user,
    configDatasource.mysql.conn.pswd,
    {
        host: configDatasource.mysql.conn.host,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
)

var export_modules = new Array();

for (var model of configDatasource.mysql.models){
    var feilds = new Array();
    for (var feild of model.feilds){
        if(feild.primary){
            feilds.push('{name}: {type: Sequelize.{type}, primaryKey: {primary}, autoIncrement: true}'.format(feild));
        }
        else{
            feilds.push('{name}: Sequelize.{type}'.format(feild))
        }
    }
    cmd_define_model = "var {variate} = sequelize.define('{table}', {{feilds}}, {timestamps: false, freezeTableName: true});".format(
        {
            variate: model.table,
            table: model.table,
            feilds: feilds.join(', ')
        }
    )
    eval(cmd_define_model)
    export_modules.push(model.table)
}

var cmd_export = 'module.exports = {{modules}}'.format(
    {
        modules: export_modules.join(', ')
    }
)
eval(cmd_export)