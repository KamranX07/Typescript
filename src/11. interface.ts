// Interface
/* -> The role of interface is to give a shape to your data. */

interface Coffee {
    readonly id: number,
    flavour: string
    price: number
    sugar?: boolean
}
const black: Coffee = {
    id: 1,
    flavour: "black",
    price: 20
}

// Function & Methods Handling
interface DiscountCalculator {
    (price: number): number
}
const apply50: DiscountCalculator = (p) => p * 0.5

interface CoffeeMachine {
    start(): void
    stop(): void
}
const machine: CoffeeMachine = {
    start() {
        console.log("Start")
    },
    stop() {
        console.log("Stop")
    },
}

// Index Signature
interface CoffeeRatings {
    [flavour: string]: number
}
const ratings: CoffeeRatings = {
    black: 4.3,
    cold: 4.4
}

// Unique features of interface
/* Suppose you use some libraries and you have your own code in your system then also the code 
   would come from the libraries so interface can work with both combined. */

interface User {
    name: string
}
interface User {
    age: number
}
const u: User = {
    name: "Kamran",
    age: 29
}

interface A {a: string}
interface B {b: string}
interface C extends A, B {}