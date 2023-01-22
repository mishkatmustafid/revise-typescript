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

let employee: {
  readonly id: number
  name: string
  retire: (date: Date) => void
} = {
  id: 1,
  name: "Mishkat",
  retire: (date: Date) => {
    console.log(date)
  },
}
