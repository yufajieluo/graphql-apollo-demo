const { RESTDataSource } = require('apollo-datasource-rest')
class Base extends RESTDataSource {
    constructor(baseURL){
        super()
        this.baseURL = baseURL
    }

    async Get(url, condition) {
        const result = await this.get(url, condition)
        return result
    }

    async All(url) {
        const result = await this.get(url)
        return result
    }

    async Add(url, args) {
        const result = await this.post(url, args)
        return result
    }

    async Upd(url, args) {
        const result = await this.put(url, args)
        return result
    }

    async Del(url, args) {
        const result = await this.delete(url, args)
        return result
    }
}

module.exports = { Base }
