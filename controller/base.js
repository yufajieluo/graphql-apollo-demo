const moment = require('moment')
const { rspMsg } = require('../resp')

class ControllerMySQL{
    constructor(ClassModel){
        this.instance = new ClassModel()

        this.page = async (ctx, next) => {
            const result = await this.instance.page({
                'pageNo': Number(ctx.request.query.pageNo),
                'pageSize': Number(ctx.request.query.pageSize)
            })
            ctx.body = rspMsg('r200', {'result': result})
        }

        this.all = async (ctx, next) => {
            const result = await this.instance.all()
            ctx.body = rspMsg('r200', {'result': result})
        }

        this.get = async (ctx, next) => {
            const result = await this.instance.get({'id': ctx.request.query.id})
            if (result) {
                ctx.body = rspMsg('r200', {'result': result})
            } else {
                ctx.body = rspMsg('r20001')
            }
        }

        this.add = async (ctx, next) => {
            const result = await this.instance.add(ctx.request.body)
            if (result) {
                ctx.body = rspMsg('r200', {'result': result})
            } else {
                ctx.body = rspMsg('r20001')
            }
        }

        this.upd = async (ctx, next) => {
            var condition = new Map()
            condition = {'id': ctx.request.body.id}

            var update = new Map()
            update.modify_time = moment().format('YYYY-MM-DD HH:mm:ss')
            for (var key in ctx.request.body){
                update[key] = ctx.request.body[key]
            }

            const result = await this.instance.upd({
                condition: condition,
                update: update
            })
            if (result) {
                ctx.body = rspMsg('r200')
            } else {
                ctx.body = rspMsg('r20001')
            }
        }
        
        this.del = async (ctx, next) => {
            const result = await this.instance.del(ctx.request.body)
            if (result) {
                ctx.body = rspMsg('r200')
            } else {
                ctx.body = rspMsg('r20001')
            }
        }
    }
}

class ControllerMongo{
    constructor(ClassModel){
        this.instance = new ClassModel()

        this.page = async (ctx, next) => {
            const result = await this.instance.page({
                'pageNo': Number(ctx.request.query.pageNo),
                'pageSize': Number(ctx.request.query.pageSize)
            })
            ctx.body = rspMsg('r200', {'result': result})
        }

        this.all = async (ctx, next) => {
            const result = await this.instance.all()
            ctx.body = rspMsg('r200', {'result': result})
        }

        this.get = async (ctx, next) => {
            const result = await this.instance.get({'_id': ctx.request.query.id})
            ctx.body = rspMsg('r200', {'result': result})
        }
        
        this.add = async (ctx, next) => {
            const result = await this.instance.add(ctx.request.body)
            ctx.body = rspMsg('r200', {'result': result})
        }

        this.del = async (ctx, next) => {
            const result = await this.instance.del({'_id': ctx.request.body.id})
            ctx.body = rspMsg('r200', {'result': result})
        }

        this.upd = async (ctx, next) => {
            var condition = new Map()
            condition = {'_id': ctx.request.body.id}
        
            var update = new Map()
            update.modify_time = moment().format('YYYY-MM-DD HH:mm:ss')
            for (var key in ctx.request.body){
                update[key] = ctx.request.body[key]
            }
            
            const result = await this.instance.upd({
                condition: condition,
                update: update
            })
            ctx.body = rspMsg('r200', {'result': result})
        }
    }
}

module.exports = { ControllerMongo, ControllerMySQL }