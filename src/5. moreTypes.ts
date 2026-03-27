// Type assertion
let response:any = "42"     // Checking where Type assertion fails

/*After sometime it got assumed that the datatype is string but response
  variable is still showing that the datatype is any, So we have to forcefully apply 
  type assertion to be able to use its methods suggestions otherwise it won't suggest the methods.
*/
let numericLength:number = (response as string).length

const inputElement = document.getElementById("username") as HTMLInputElement

type Book = {
  name: string
}
let bookString = '{"name":"who moved my cheese"}'
let bookObject = JSON.parse(bookString) as Book
console.log(bookObject)

// any vs unknown
let value:any
value = "coffee"
value = [1, 2, 3]
value = 2.6
value.toUpperCase()

let newValue:unknown
newValue = "coffee"
newValue = [1, 2, 3]
newValue = 2.6
if(typeof newValue === "string"){
  newValue.toUpperCase()
}

// try-catch
try {
  
} catch (error) {
  if(error instanceof Error){
    console.log(error.message)
  }
  console.log("Error", error)
}

// never
type Role = "admin" | "user"

function redirectBasedOnRole(role: Role): void {
  if(role === "admin"){
    console.log("Redirecting to admin dashboard")
    return
  }
  if(role === "user"){
    console.log("Redirecting to user dashboard")
    return
  }
  role    //All datatypes have been called so again after calling role, its datatype becomes never
}

function neverReturn():never {
  while(true){}   // A type of infinite loop
}