//Lifetime Supply Calculator
document.write("<h1>The Lifetime Supply Calculator</h1><br>");
let favorite_snack = "Wavy";
let currentAge = 20;
let maximum_age = 65;
let estimatedAmount = 3;
let calculate = (currentAge + maximum_age + estimatedAmount);
document.write("Favorite Snack : " + favorite_snack);
document.write("<br>Current age : " + currentAge);
document.write("<br>Estimated Maximum Age : " + maximum_age);
document.write("<br>Amount of snack per day : " + estimatedAmount);
document.write("<br>You will need " + calculate + " " + favorite_snack + " to last you until the ripe old age of " + maximum_age);
