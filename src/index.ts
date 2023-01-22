let user: [number, string] = [1, "Mosh"]
user.push(1) // This is wrong
console.log(user)

const enum Gender {
  Male = "m",
  Female = "f",
}
let myGender: Gender = Gender.Male
console.log(myGender)

function calculateSum(x: number, y = 0): number {
  let sum = x + y
  if (sum > 15) return sum
  return sum * 1.1
}

type Employee = {
  readonly id: number
  name: string
  retire: (date: Date) => void
}
let employee: Employee = {
  id: 1,
  name: "Mishkat",
  retire: (date: Date) => {
    console.log(date)
  },
}

function kgToLbs(weight: number | string): number {
  // Narrowing
  if (typeof weight === "number") return weight * 2.2
  else return parseInt(weight) * 2.2
}

kgToLbs(10)
kgToLbs("10")

type Draggable = {
  drag: () => void
}
type Resizable = {
  resize: () => void
}
type UIWidget = Draggable & Resizable

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
}

type Sex = "Male" | "Female"

function great(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase())
  else console.log("Hola!")
}

type Customer = {
  birthday?: Date
}

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1)
// Optional property access operator
console.log(customer?.birthday?.getFullYear())

// Optional element access operator
// customer?.[0]

// Optional call
let log: any = null
log?.("a")
