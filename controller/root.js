const getRoot = async (ctx, next) => {
    ctx.body = {
        success: true,
        data: 'root'
    }
}

module.exports = { getRoot }