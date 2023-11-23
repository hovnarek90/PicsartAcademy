export class ShoppingCard {
  constructor() {
    this.items = {};
  }

  addItem(product, quantity) {
    if (this.items[product]) {
      this.items[product] += quantity;
    } else {
      this.items[product] = quantity;
    }
  }

  removeItem(product, quantity) {
    if (this.items[product]) {
      this.items[product] = Math.max(0, this.items[product] - quantity);
      if (this.items[product] === 0) {
        delete this.items[product];
      }
    }
  }

  viewCart() {
    if (Object.keys(this.items).length === 0) {
      console.log("Your shopping cart is empty.");
    } else {
      console.log("Shopping Cart:");
      for (const [product, quantity] of Object.entries(this.items)) {
        console.log(`${product}: ${quantity} units`);
      }
    }
  }

  buy(user) {
    const productPrice = 10.99;
    const totalCost = Object.entries(this.items).reduce(
      (acc, [product, quantity]) => acc + quantity * productPrice,
      0
    );
    if (user.wallet < totalCost) {
      console.log("Insufficient funds. Please add money to your wallet.");
      return;
    }

    user.wallet -= totalCost;

    this.items = {};
    console.log("Purchase complete!");
    console.log(`Total Cost: $${totalCost.toFixed(2)}`);
    console.log(`Remaining Wallet Balance: $${user.wallet.toFixed(2)}`);
  }
}
