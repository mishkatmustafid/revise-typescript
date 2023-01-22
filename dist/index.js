"use strict";
let user = [1, "Mosh"];
user.push(1);
console.log(user);
let myGender = "m";
console.log(myGender);
function calculateSum(x, y = 0) {
    let sum = x + y;
    if (sum > 15)
        return sum;
    return sum * 1.1;
}
let employee = {
    id: 1,
    name: "Mishkat",
    retire: (date) => {
        console.log(date);
    },
};
//# sourceMappingURL=index.js.map