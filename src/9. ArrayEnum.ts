// Arrays
const coffeeFlavours: string[] = ["Black", "Cold"]
const coffeePrice: number[] = [20, 25]

const rating: Array<number> = [4.5, 4.0]

// Array of Objects
type Coffee = {
    name: string;
    price: number
}
const menu: Coffee[] = [
    {name: "Black", price: 20},
    {name: "Cold", price: 25},
]

// Read-only Array
const cities: readonly string[] = ["Delhi", "Jharkhand"]
/* cities.push("Pune")      <-- This will throw error  */

// Multi-Dimensional Array
const table: number[][] = [
    [1, 2, 3],
    [4, 5, 6]
]

// Tuples
let coffeeTuple: [string, number, boolean?];
coffeeTuple = ["Black", 20]
coffeeTuple = ["Cold", 25, true]
/* coffeeTuple = [25, "Cold"]       <-- This will throw error */

// Read-onlt Tuples
const location: readonly [number, number] = [28.66, 32.22]

// Named Tuple
const coffeeItems: [name: string, price: number] = ["Black", 20]

// Enums
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = CupSize.LARGE

enum CoffeeType {
    BLACK = "black",
    COLD = "cold"
}
function makeCoffee(type: CoffeeType){
    console.log(`Making: ${type}`)
}
makeCoffee(CoffeeType.BLACK)