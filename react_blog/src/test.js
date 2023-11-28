let numberRange = {
  from: 1,
  to: 15,
  [Symbol.iterator]: function* () {
    for (let i = this.from; i < this.to; i++) {
      yield i;
    }
  },
};

for (const number of numberRange) {
  console.log(number);
}

let cat = {
  name: "mik",
  age: 3,
  [Symbol.toPrimitive]: function (hint) {
    if (hint === "string") {
      return this.name;
    }
    if (hint === "number") {
      return this.age;
    }
    return this.name + " " + this.age;
  },
};
console.log(String(cat)); // "mik"
console.log(Number(cat)); // 3
console.log(cat + " is " + cat.age + " years old");

function fetchData(delay, shuteBeSuccess) {
  setTimeout(() => {
    if (shuteBeSuccess) {
      return Promise.resolve("yes");
    }
    return Promise.reject("no");
  }, delay);
}
