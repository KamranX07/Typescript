// Type Narrowing
/* -> Whenever we narrow down the type of the upcoming data, we will know what type of methods 
      or suggestions we have to give it while making custom applications after adding .(dot) */

function getCoffee(kind: string | number) {
    if(typeof kind === "string") {
        return `Making ${kind} coffee...`
    }
    return `Coffee order: ${kind}`
    // Add . after kind to know the available methods or suggestions (e.g. ${kind.charAt})
}

// Truthiness (Comes under best practices to write Typescript)
function serveCoffee(msg?: string) {
    if(msg){
        return `Serving ${msg}`     //In this block, the msg exist so we can use its variable.
    }
    return `Serving default coffee` /*In this block, the msg doesn't exist so there is no need to 
                                      use its variable.*/
}

// Exhaustive checks
class BlackCoffee{
    serve(){
        return `Serving Black Coffee`
    }
}
class ColdCoffee{
    serve(){
        return `Serving Cold Coffee`
    }
}
function serve(coffee: BlackCoffee | ColdCoffee){
    // How to know from which method the function is calling
    if(coffee instanceof BlackCoffee){
        return coffee.serve()       //The serve method is calling from BlackCoffee class
    }
}

// Custom types
type CoffeeOrder = {
    type: string
    sugar: number
}

function isCoffeeOrder(obj:any):obj is CoffeeOrder{
    return(
        typeof obj === "object" && 
        obj !== null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serverOrder(item:CoffeeOrder | string){
    if(isCoffeeOrder(item)){
        return `Serving ${item.type} coffee with ${item.sugar} sugar`
    }
    return `Serving custom coffee: ${item}`
}