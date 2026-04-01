class Coffee {
    flavour: string;
    price: number

    constructor(flavour: string, price: number){
        this.flavour = flavour
        this.price = price
        console.log(this)
    }
}
const blackCoffee = new Coffee("Black", 20)
blackCoffee.flavour = "black"

// Access Modifier
class Tea {
    public flavour: string = "Masala"
    private secretIngredients = "Cardamon"

    reveal(){
        return this.secretIngredients
    }
}
const c = new Tea()
c.flavour
c.reveal

class Shop {
    protected shopName = "Tea Corner"
}
class Branch extends Shop {
    getName(){
        return this.shopName        //Only the inheritance class can access protected values
    }
}

// Another way to create private properties
class Wallet {
    #balance = 100

    getBalance(){
        return this.#balance
    }
}
const w = new Wallet()

// Read-only properties
class Cup {
    readonly capacity: number = 250

    constructor(capacity: number){
        this.capacity = capacity
    }
}

// Controlled Gates (Getter-Setter)
class ModernCoffee {
    private _sugar = 2

    get sugar(){
        return this._sugar
    }
    set sugar(value: number){
        if(value > 5) throw new Error("Two sweet")
        this._sugar = value
    }
}
const m = new ModernCoffee()
m.sugar = 3

// Static Members
class OneCoffee {
    static shopName = "Cappuccino cafe"

    constructor(public flavour: string){}
}
console.log(OneCoffee.shopName)

// When you want to create classes but don't want to make objects from the classes
abstract class Drink {
    abstract make(): void
}
class MyCoffee extends Drink {
    make(){
        console.log("Brewing Coffee")
    }
}

// Composition
// -> A class constructor taking the property type from another class similar to inheritance
class Heater {
    heat(){}
}
class CoffeeMaker {
    constructor(private heater: Heater){}
    make(){
        this.heater.heat
    }
}