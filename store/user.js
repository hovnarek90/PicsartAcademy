import { ShoppingCard } from "./shoppingCard.js";

export class User {
  constructor(name, surname, phone, email, password , wallet) {
    (this.id = Math.floor(new Date().getMilliseconds() * Math.random())),
      (this.name = name);
    this.surname = surname;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.shoppingCard = new ShoppingCard();
    this.wallet = wallet
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
}
