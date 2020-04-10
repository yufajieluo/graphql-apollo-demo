const Router = require('koa-router')
const { configHttp } = require('../config/http')
const { getRoot } = require('../controller/root')

const { Park } = require('../controller/park')
const { Department } = require('../controller/department')
const { Duty } = require('../controller/duty')
const { Employee } = require('../controller/employee')

var router = new Router()

router.get(configHttp.url.root, getRoot)

var park = new Park()
router.get(configHttp.url.park, park.page)
router.put(configHttp.url.park, park.upd)
router.post(configHttp.url.park, park.add)
router.delete(configHttp.url.park, park.del)
router.get(configHttp.url.parkDetail, park.get)
router.get(configHttp.url.sysPark, park.all)

var department = new Department()
router.get(configHttp.url.department, department.page)
router.put(configHttp.url.department, department.upd)
router.post(configHttp.url.department, department.add)
router.delete(configHttp.url.department, department.del)
router.get(configHttp.url.departmentDetail, department.get)
router.get(configHttp.url.sysDepartment, department.all)

var duty = new Duty()
router.get(configHttp.url.duty, duty.page)
router.put(configHttp.url.duty, duty.upd)
router.post(configHttp.url.duty, duty.add)
router.delete(configHttp.url.duty, duty.del)
router.get(configHttp.url.dutyDetail, duty.get)
router.get(configHttp.url.sysDuty, duty.all)

var employee = new Employee()
router.get(configHttp.url.employee, employee.page)
router.put(configHttp.url.employee, employee.upd)
router.post(configHttp.url.employee, employee.add)
router.delete(configHttp.url.employee, employee.del)
router.get(configHttp.url.employeeDetail, employee.get)
router.get(configHttp.url.sysEmployee, employee.all)

module.exports = {router}