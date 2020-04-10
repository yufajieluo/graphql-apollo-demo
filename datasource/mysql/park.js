
const moment = require('moment')
const { Base } = require('./base')
const { park, region } = require('./model')

class ModelPark extends Base {
    constructor(){
        super(park)
    }

    async page(args){
        const result = await park.findAndCountAll({
            offset: args.pageNo > 0 ? args.pageSize * (args.pageNo - 1) : 0,
            limit: args.pageSize,
            order: [  ['id', 'ASC'] ]
        })

        for (var row of result.rows){
            const regions = await region.findAll({
                where: {park_id: row.id},
                order: [ ['id', 'ASC'] ]
            })
            row.regions = regions
            row.dataValues.regions = regions
        }

        var totalPages = Math.ceil(result.count / args.pageSize)
        return {
            pagination: {
                pageSize: args.pageSize,
                totalNums: result.count,
                totalPages: totalPages,
                pageNo: args.pageNo,
                nextPage: Math.min(Math.max(1, args.pageNo + 1), totalPages),
                previousPage: Math.max(Math.min(args.pageNo - 1, totalPages), 1)
            },
            datas: result.rows
        }
    }
    
    async all(){
        const result = await park.findAndCountAll({
            order: [ ['id', 'ASC'] ]
        })
        for (var row of result.rows){
            const regions = await region.findAll({
                where: {park_id: row.id},
                order: [ ['id', 'ASC'] ]
            })
            row.regions = regions
            row.dataValues.regions = regions
        }
        return result.rows
    }

    async get(args){
        const result = await park.findOne({
            where: args
        })
        const regions = await region.findAll({
            where: {park_id: result.id},
            order: [ ['id', 'ASC'] ]
        })
        result.regions = regions
        result.dataValues.regions = regions
        return result
    }

    async add(args){
        args.create_time = moment().format('YYYY-MM-DD HH:mm:ss')
        return await park.create(args)
    }
}

module.exports = { ModelPark }