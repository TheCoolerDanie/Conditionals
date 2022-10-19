let payRate;
let hoursWorked;
let pay;
let payExtra;

payRate = 12.52;
hoursWorked = 53;
if (hoursWorked > 40) {
    pay = (payRate * 40)
    payRate = (payRate * 1.5);
    hoursWorked = (hoursWorked - 40); 
    payExtra = (hoursWorked * payRate)
    pay = (pay+payExtra)
}
else {
    pay=(hoursWorked*payRate)
}
console.log(pay.toFixed(2))

// payRate 12.50, hoursWorked 20, ended up with 250
// payRate 25, hoursWorked 40, ended up with 1000
// payRate 17.30, hoursWorked 45, ended up with 821.75
// payRate 12.52, hoursWorked 53, ended up with 744.94