function makeCoffee(type: string, cups: number){
    console.log(`Making ${cups} cups of ${type}`)
}
makeCoffee("BlackCoffee", 2)

// When the return datatype is known
function getCoffeePrice():number {
    return 40
}

// When the return datatype is unknown
function makeOrder(order: string){
    if(!order) return null
    return order
}

// Logger Functions
function logCoffee(): void {
    console.log("Your Coffee is ready")
}
// Optional vs default parameter
/* -> Standard practice is when there are multiple parameters, optional and default parameters are
      written at the end.
*/
function orderCoffee(type?: string){}
function orderCOffee(type: string = "Black"){}

// Complex Functions
function createCoffee(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number{
    return 4
}