//VERY EASY
function min (x,y){
    return (Math.min(x,y))
}
console.log(min(10,8));

//EASY
let firstName = ["Jessica", "Vanessa", "Kelly"];
let lastName = ["Alvarez", "Diaz", "Mejia"];
let age = [18, 19, 18];
console.log(`hello my name is ${firstName[1]} ${lastName[1]} and I am ${age[1]} years old `);

//MEDIUM

let input = prompt("enter a number 1-12");

if (input == 1){
    console.log("January");
}else if (input ==2){
    console.log("Febuary");
}else if(input == 3){
    console.log("March");
}else if (input == 4){
    console.log("April");
}else if(input == 5){
    console.log("May");
}else if (input == 6){
    console.log("June");
}else if (input == 7){
    console.log("July");
}else if (input == 8){
    console.log("August");
}else if (input == 9){
    console.log("September");
}else if (input == 10){
    console.log("October");
}else if(input == 11){
    console.log("November");
}else if (input == 12){
    console.log("December");
}else{
    alert("invalid number please enter a number 1-12")
}

//HARD
let tomMass = 8;
let tomHeight = 9;

let jerryMass = 45;
let jerryHeight = 10;

let tomBMI = tomMass / tomHeight **2;
let jerryBMI = jerryMass / jerryHeight **2;
if (tomBMI > jerryBMI){
    console.log(`Toms BMI of (${tomBMI}) is greater than Jerrys BMI of(${jerryBMI})`);
}else {
    console.log(`Jerrys BMI of (${jerryBMI}) is greater than Toms BMI of (${tomBMI})`);
}
