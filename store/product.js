class Product {
  #price;
  constructor(name, price, feature, descriptor) {
    if (this.constructor === Product) {
      throw new Error("Product is abstract class");
    }
    if (!this.checkPrice(price)) {
      console.log("Invalid input (price)");
      return;
    }
    (this.id = Math.floor(new Date().getMilliseconds() * Math.random())),
      (this.name = name);
    this.#price = price;
    this.feature = feature;
    this.descriptor = descriptor;
  }
  getProductDetails() {
    return `Product: ${this.name}\nID: ${this.id}\nPrice: $${this.price}\nFeature: ${this.feature}\nDescriptor: ${this.descriptor}`;
  }

  checkPrice(price) {
    if (typeof price !== "number" || price <= 0) {
      return false;
    }
    return true;
  }

  getPrice() {
    return this.#price;
  }
}

class Coffee extends Product {
  constructor(name, price, feature, descriptor, kg, type) {
    super(name, price, feature, descriptor);

    this.kg = kg;
    this.type = type;
  }
}

export { Coffee };
