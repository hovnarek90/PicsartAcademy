import { User } from "./user.js";
import { Coffee } from "./product.js";
import { ShoppingCard } from "./shoppingCard.js";

document.addEventListener("DOMContentLoaded", function () {
  const user = new User(
    "Max",
    "Smit",
    "123456789",
    "max.smith@gmail.com",
    "password123",
    100
  );
  const coffeeInstance = new Coffee(
    "Coffee Name",
    10.99,
    "Rich Flavor",
    "Premium Quality",
    0.5,
    "Arabica"
  );

  document.getElementById("userName").innerText = user.name;
  document.getElementById("userSurname").innerText = user.surname;
  document.getElementById("userPhone").innerText = user.phone;
  document.getElementById("userEmail").innerText = user.email;
  document.getElementById("userFullName").innerText = user.getFullName();
  document.getElementById("emailValidation").innerText = user.validateEmail()
    ? "Valid"
    : "Invalid";
  document.getElementById("userWallet").innerText = user.wallet;
  document.getElementById("productName").innerText = coffeeInstance.name;
  document.getElementById("productPrice").innerText = coffeeInstance.getPrice();
  document.getElementById("productFeature").innerText = coffeeInstance.feature;
  document.getElementById("productDescriptor").innerText =
    coffeeInstance.descriptor;
  document.getElementById("productWeight").innerText = coffeeInstance.kg;
  document.getElementById("productType").innerText = coffeeInstance.type;
});
