const { configResp } = require('../config/resp')


const rspMsg = (rspCode, rspData) => {
    
    if(configResp.hasOwnProperty(rspCode)){
        var rspInfo = configResp[rspCode]
    }else{
        var rspInfo = 'failed'
    }
    
    var rsp = {
        'rspHead': {
            rspCode: rspCode,
            rspInfo: rspInfo
        },
        'rspBody': rspData
    }
    
    return rsp
}

module.exports = { rspMsg }
