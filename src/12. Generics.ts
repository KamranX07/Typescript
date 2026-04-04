// Generics
/* -> Generics are templates that makes the code reusable. */

function wrapInArray<T>(item: T): T[]{
    return [item]
}
/* Here T is defined which can be any datatype and the T got pass as the datatype for item so
   the return dataype would also be the same T (What you pass that you get) */
wrapInArray("Cold")
wrapInArray(25)
wrapInArray({flavour: "Black"})

function pair<A, B>(a: A, b: B): [A, B] {
    return [a, b]
}
pair("black", 20)
pair("cold", {flavour: "black"})

// Generic interface
interface Box<T> {
    content: T
}
const numberBox: Box<string> = {content: "10"}
const numberBox1: Box<number> = {content: 10}

interface ApiPromise<T> {
    status: number
    data: T
}
const res: ApiPromise<{flavour: string}> = {
    status: 200,
    data: {flavour: "Black"}
}