
class Student extends Person {
    constructor(public name: string) {
        super(name)
    }

    study() {
        console.log(`study hard`)
    }
}

var p = new Student('john')
p.say()
p.study()


