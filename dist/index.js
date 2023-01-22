"use strict";
var _a;
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
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs("10");
let textBox = {
    drag: () => { },
    resize: () => { },
};
function great(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let log = null;
log === null || log === void 0 ? void 0 : log("a");
//# sourceMappingURL=index.js.map