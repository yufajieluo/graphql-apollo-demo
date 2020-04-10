const { configLogger } = require('../config/logger')
const { createLogger, transports, format } = require('winston')
const { label } = format
const DailyRotateFile = require('winston-daily-rotate-file')

if(configLogger.format == 'json'){
    var logFormat = format.combine(
        format.splat(),
        format.simple(),
        format.json(),
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
    )
}else{
    var logFormat = format.combine(
        label({ label: 'user-service' }),
        format.splat(),
        format.simple(),
        format.timestamp({format: 'YYYY-MM-DD HH:mm:ss.SSS'}),
        format.printf(({ level, message, label, timestamp }) => {
            return `[${timestamp}] [${label}] [${level}]: ${message}`;
        })
    )
}

const logger = createLogger({
    level: configLogger.level,
    
    defaultMeta: { 
        service: 'user-service'
    },

    format: logFormat,
    
    transports: [
        new DailyRotateFile({
            filename: configLogger.filename.normal,
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true
        }),
        new DailyRotateFile({
            level: 'error',
            filename: configLogger.filename.error,
            datePattern: 'YYYY-MM-DD',
            zippedArchive: true
        }),
    ]
})

module.exports = { logger }