//Types doesn't work sometimes properly with classes so implementation of interface is recommended
interface CoffeeRecipe {
    milk: number
    beans: number
}
class BlackCoffee implements CoffeeRecipe {
    beans = 50
    milk = 100
}

// Literal Type
type CoffeeType = "Black" | "Cold"
function orderCoffee(t: CoffeeType){
    console.log(t)
}

// Optional Type
type User = {
    username: string
    bio?: string
}
const u1: User = {username: "KamranX07"}
const u2: User = {username: "KamranX07", bio: "kamran.xyz"}

// Read only type (One time defined value, can't change the value)
type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Moviesbuild",
    version: 1.0
}
// cfg.appName = "Moviesverse"  (This will throw error)