const moment = require('moment');
const mongoose = require('mongoose');
const format = require('string.format');
const { configDatasource } = require('../../config/datasource');

const Schema = mongoose.Schema

const mongoConn = () => {
    mongoose.set('debug', true)
    mongoose.set('bufferCommands', false);
    const options = {
        autoIndex: false,
        reconnectTries: 3,
        reconnectInterval: 500,
        bufferMaxEntries: 0
        
    };
    mongoose.connect(configDatasource.mongo.conn, options)

    mongoose.connection.on('error', err => {
        console.error(err)
    })
    mongoose.connection.on('open', async () => {
        console.log('Connected to MongoDB ')
    })
    
}


var export_modules = new Array();
export_modules.push('mongoConn')

for (var model of configDatasource.mongo.models){
    var cmd_define_model = "var schema_{modelName} = new Schema({modelFeilds}, {collection: '{modelName}'})".format({
        modelName: model.collection,
        modelFeilds: model.feilds
    })
    eval(cmd_define_model)

    if (model.feilds.hasOwnProperty('create_time')){
        if (model.feilds.hasOwnProperty('modify_time')){
            var cmd_pre = "\
                schema_{modelName}.pre('save', function (next) {\
                    this.create_time = this.modify_time = moment().format('YYYY-MM-DD HH:mm:ss');\
                    next();\
                });\
            ".format({modelName: model.collection})
        }else{
            var cmd_pre = "\
                schema_{modelName}.pre('save', function (next) {\
                    this.create_time = moment().format('YYYY-MM-DD HH:mm:ss')\
                    next()\
                })\
            ".format({modelName: model.collection})
        }
        eval(cmd_pre)
    }

    var cmd_model = "var {modelName} = mongoose.model('{modelName}', schema_{modelName})".format({
        modelName: model.collection
    })
    eval(cmd_model)

    export_modules.push(model.collection)
}

var cmd_export = 'module.exports = {{modules}}'.format(
    {
        modules: export_modules.join(', ')
    }
)
eval(cmd_export)