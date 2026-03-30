// Object
let coffee: {
    name: string;
    price: number;
    isHot: boolean
}
coffee = {
    name: "Black Coffee",
    price: 40,
    isHot: true
}

// Alias Object
type COffee = {
    name: string;
    price: number;
    ingredients: string[]
}
const coldCoffee: COffee = {
    name: "Cold Coffee",
    price: 50,
    ingredients: ["Coffee beans", "Ice"]
}
// Duck typing
type Cup = {size: string}
let smallCup: Cup = {size: "200ml"}
let bigCup = {size: "500ml", material: "steel"}
smallCup = bigCup

// Datatype Splitout
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type Order = {
    id: string;
    items: Item[];
    address: Address
}

// Partial vs Required
// -> Partial make all the properties in a type optional, so empty objects can also be passed
type Coffee = {
    name: string;
    price: number;
    isHot: boolean
}
const updateCoffee = (updates: Partial<Coffee>) => {
    console.log("Updating coffee with", updates)
}
updateCoffee({price: 25})
updateCoffee({isHot: false})
updateCoffee({})        // <-- Here an empty object has been passed which can create a problem

// -> Required make all the optional properties in a type required, so no empty objects can be passed
type CoffeeOrder = {
    name?: string;
    quantity?: number
}
const placeOrder = (order: Required<CoffeeOrder>) => {
    console.log(order)
}
placeOrder({
    name: "Black Coffee",
    quantity: 2
})

// Pick vs Omit
// -> Pick only selects some properties of all the available properties in a type.
type Tea = {
    name: string;
    price: number;
    isHot: boolean;
    ingredients: string[]
}
type BasicTeaInfo = Pick<Tea, "name" | "price">
const teaInfo: BasicTeaInfo = {
    name: "Lemon Tea",
    price: 30
}

/* -> Omit discard a property from all the available properties, and the rest of the properties
    would be required
*/
type TeaNew = {
    name: string;
    price: number;
    isHot: boolean;
    secretIngredients: string
}
type PublicTea = Omit<TeaNew, "secretIngredients">