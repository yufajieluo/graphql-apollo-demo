class Sleep {
    constructor(){
        const c = async (ctx, next) => {
            console.log('xxxx')
        }
    }
}

class Cry{
    c(){
        console.log('Cry cry')
    }
}

class AA {
    constructor(ClassAnimal){
        this.instance = new ClassAnimal()
    }

    run(){
        this.instance.run()
    }

    c(){
        this.instance.c()
    }
}

class Cat extends AA{
    constructor(){
        super(Sleep)
        this.name = 'cat'
        
    }
    sleep(){
        console.log(this.name, 'sleep')
    }
    run(){
        console.log(this.name, 'run')
    }
}



cat = new Cat()
cat.c()