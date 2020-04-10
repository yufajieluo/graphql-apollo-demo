const func = () => {
    console.log('this is func')   
}

class A{
    constructor(){
        this.age = 33
        this.sex = 'male'
    }

    static func(){
        this.age = 22
    }
}

a = new A()
console.log(a.age)


module.exports = {func}
