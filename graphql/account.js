
const { RESTAccount } = require('../datasource/rest/account')
const { GraphREST } = require('./base')

class Account extends GraphREST{
    constructor(URLREST){
        super(RESTAccount, URLREST)

        this.get = async (url, condition) => {
            const result = await this.instance.Get(url, condition)
            if (result.rsp_head.rsp_code == 200){
                return result.rsp_body.user
            }else{
                return {}
            }
        }

        this.all = async (url) => {
            const result = await this.instance.All(url)
            if (result.rsp_head.rsp_code == 200){
                return result.rsp_body.users
            }else{
                return []
            }
        }

        this.page = async (url, condition) => {
            const result = await this.instance.Get(url, condition)
            if (result.rsp_head.rsp_code == 200){
                return {
                    pagination: {
                        pageNo: result.rsp_body.pages.current_page,
                        totalNums: result.rsp_body.pages.total_nums,
                        totalPages: result.rsp_body.pages.total_pages,
                        nextPage: result.rsp_body.pages.next_page,
                        previousPage: result.rsp_body.pages.previous_page
                    },
                    datas: result.rsp_body.users
                }
            }
        }

        this.add = async (url, args) => {
            const result = await this.instance.Add(url, args)
            return result.rsp_head.rsp_info
        }

        this.upd = async (url, args) => {
            const result = await this.instance.Upd(url, args)
            return result.rsp_head.rsp_info
        }

        this.del = async (url, args) => {
            const result = await this.instance.Del(url, args)
            return result.rsp_head.rsp_info
        }
    }
}

module.exports = { Account }