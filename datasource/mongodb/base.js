class Base {
    constructor(model){
        this.model = model
    }

    async page(args){
        const count = await this.model.count()

        var pagination = {
            pageSize: args.pageSize,
            totalNums: count,
            totalPages: Math.ceil(count / args.pageSize),
            pageNo: args.pageNo,
            nextPage: Math.min(Math.max(1, args.pageNo + 1), Math.ceil(count / args.pageSize)),
            previousPage: Math.max(Math.min(args.pageNo - 1, Math.ceil(count / args.pageSize)), 1)
        }

        var skip_count = args.pageNo > 0 ? args.pageSize * (args.pageNo - 1) : 0
        const result = await this.model.find({})
            .skip(skip_count)
            .limit(args.pageSize)
            .sort({_id: -1})

        return {
            pagination: pagination,
            datas: result
        }
    }

    async all(){
        const result = await this.model.find({}).sort({
            _id: -1
        })

        return result
    }

    async get(args){
        const result = await this.model.findOne(args)

        return result
    }

    async add(args){
        const result = await this.model.create(args)
        return result
    }

    async del(args){
        const result = await this.model.remove(args)
        return result
    }

    async upd(args){        
        const result = await this.model.findOneAndUpdate(args.condition, args.update)
        return result
    }
}

module.exports = { Base }