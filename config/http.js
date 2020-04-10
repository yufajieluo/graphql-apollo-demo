configHttp = {
    listenPort: 4000,
    url: {
        root: '/',

        park: '/park',
        parkDetail: '/park/detail',
        
        department: '/department',
        departmentDetail: '/department/detail',

        duty: '/duty',
        dutyDetail: '/duty/detail',

        employee: '/employee',
        employeeDetail: '/employee/detail',

        region: '/region',
        regionDetail: '/region/detail',

        sysPark: '/sys/park',
        sysDepartment: '/sys/department',
        sysDuty: '/sys/duty',
        sysEmployee: '/sys/employee',
    }
}

module.exports = { configHttp }