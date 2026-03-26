// Union
// -> It defines strictly all the datatype or values a variable can have...
let subs: number | string = "1M"

let apiRequestStatus: 'pending' | 'success' | 'error' = 'pending'
apiRequestStatus = 'success'

// Any
let orders = ["12", "21", "27", "36"]
/* let currentOrder 
        OR 
   let currentOrder:any */


// -> Note: Always try to avoid Any in Typescript unless its necessary...
let currentOrder: string | undefined
for(let order of orders) {
    if(order === "27") {
        currentOrder = order
        break;
    }
    currentOrder = "11"
}
console.log(currentOrder)