const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-body');
const { logger } = require('./logger');
const { router } = require('./roouter');
const { apollo } = require('./graphql');
const { configHttp } = require('./config/http');
const { mongoConn } = require('./datasource/mongodb/model');
mongoConn()

var appRouter = new Router();
appRouter.use(router.routes());

const app = new Koa();
app.use(koaBody({
    multipart: true,
    strict: false
}));
app.use(appRouter.routes());
app.use(appRouter.allowedMethods())
app.use(apollo.getMiddleware())

app.listen(configHttp.listenPort, () => {
    logger.info('server listening on [%d]', configHttp.listenPort)
})