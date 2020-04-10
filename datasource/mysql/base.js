class Base {
    constructor(model){
        this.model = model
    }

    async page(args){
        const result = await this.model.findAndCountAll({
            offset: args.pageNo > 0 ? args.pageSize * (args.pageNo - 1) : 0,
            limit: args.pageSize,
            order: [  ['id', 'ASC'] ]
        })

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
        const result = await this.model.findAndCountAll({
            order: [ ['id', 'ASC'] ]
        })
        return result.rows
    }

    async get(args){
        const result = await this.model.findOne({
            where: args
        })
        return result
    }

    async add(args){
        return await this.model.create(args)
    }

    async del(args){
        return await this.model.destroy({where: args})
    }
    
    async upd(args){
        return await this.model.update(
            args.update,
            {
                where: args.condition
            }
        )
    }

}

module.exports = { Base }