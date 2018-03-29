class Person {
    constructor(public name: string) {
        this.name = name
    }

    say() {
        console.log(`my name is ${this.name}`)
    }
}
