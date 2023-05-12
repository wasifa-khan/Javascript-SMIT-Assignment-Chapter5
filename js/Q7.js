//Shopping Cart for E-commerce Website
document.write("<h2>Shopping Cart</h2><br>")
let priceOfItem1 = 650;
let priceOfItem2 = 700;
let quantityOfItem1 = 7;
let quantityOfItem2 = 4;
let shippingCharge = 450;
let total = priceOfItem1 + priceOfItem2 + quantityOfItem1 + quantityOfItem2 + shippingCharge;

document.write("Price of 1 item is " + priceOfItem1);
document.write("<br>Quantity of item 1 is " + quantityOfItem1);
document.write("<br>Price of item 2 is " + priceOfItem2);
document.write("<br>Quantity of item 2 is " + quantityOfItem2);
document.write("<br>Shipping Charges " + shippingCharge);

document.write("<br><br>Total cost of your order is " + total);


