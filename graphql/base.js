const moment = require('moment')

class GraphREST{
    constructor(ClassREST, URLREST){
        this.instance = new ClassREST(URLREST)
        this.instance.initialize({})
    }    
}

class GraphMySQL{
    constructor(ClassModel){
        this.instance = new ClassModel()

        this.page = async (args) => {
            const result = await this.instance.page(args)
            return result
        }
        
        this.all = async (args) => {
            const result = await this.instance.all()
            return result
        }
        
        this.get = async (args) => {
            const result = await this.instance.get(args)
            return result
        }
        
        this.add = async (args) => {
            const result = await this.instance.add(args)
            return result.id
        }
        
        this.upd = async (args) => {
            var condition = new Map()
            condition = {'id': args.id}
        
            var update = new Map()
            update.modify_time = moment().format('YYYY-MM-DD HH:mm:ss')
            for (var key in args){
                update[key] = args[key]
            }

            const result = await this.instance.upd({
                condition: condition,
                update: update
            })
            return "success"
        }
        
        this.del = async (args) => {
            const result = await this.instance.del(args)
            return "success"
        }
    }
}

class GraphMongo{
    constructor(ClassModel){
        this.instance = new ClassModel()

        this.page = async (args) => {
            const result = await this.instance.page(args)
            return result
        }
        
        this.all = async (args) => {
            const result = await this.instance.all()
            return result
        }
        
        this.get = async (args) => {
            const result = await this.instance.get({'_id': args.id})
            return result
        }
        
        this.add = async (args) => {
            const result = await this.instance.add(args)
            return result.id
        }
        
        this.upd = async (args) => {
            var condition = new Map()
            condition = {'_id': args.id}
        
            var update = new Map()
            update.modify_time = moment().format('YYYY-MM-DD HH:mm:ss')
            for (var key in args){
                update[key] = args[key]
            }
            
            const result = await this.instance.upd({
                condition: condition,
                update: update
            })

            return "success"
        }
        
        this.del = async (args) => {
            const result = await this.instance.del({'_id': args.id})
            return "success"
        }
    }
}

module.exports = { GraphMongo, GraphMySQL, GraphREST }