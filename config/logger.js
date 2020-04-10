configLogger = {
    level: 'debug',
    format: 'raw', // json; raw
    filename: {
        normal: '/var/log/graphql/access-%DATE%.log',
        error: '/var/log/graphql/error-%DATE%.log'
    }
}

module.exports = { configLogger }