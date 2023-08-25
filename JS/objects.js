//-------------------1----------------------
const customer = {
  name: "Diana",
  surname: "Nesterenko",
  email: "dianasemak08@gmail.com",
  password: 12345,
  phone: "+380966915186",
  address: {
    city: "Zaporizhzhia",
    street: "Yuvileyna",
    house: 14,
    flat: 29,
  },
  getFullAdress() {
    return `City: ${this.address.city}, Street: ${this.address.street}, House: ${this.address.house}, Flat: ${this.address.flat}`;
  },
  changePhone(tel) {
    this.phone = tel;
  },
};

//call functions
const customerAdress = customer.getFullAdress();
console.log("Adress<<<", customerAdress);
customer.changePhone("+380677690176");
console.log("New phone<<<", customer.phone);

//add,delete
customer.isMale = true;
delete customer.address;
console.log(customer);

//copy
const customer2 = Object.assign({}, customer);
console.log("customer2: ", customer2);
const customer3 = { ...customer };
console.log("customer3: ", customer3);

//--------------------------2----------------
console.log("----------------------2------------------");
const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isFurnitureDemage: true,
};
for (let key in cat) {
  console.log(`${key} :  ${cat[key]}`);
}

//--------------------------3----------------
console.log("----------------------3------------------");
function Book(author, bookName, year, city, publishName, price) {
  (this.author = author),
    (this.bookName = bookName),
    (this.year = year),
    (this.publish = { publishName, city }),
    (this.price = price),
    (this.ageOfBook = function () {
      return 2023 - this.year;
    }),
    (this.changePrice = function (newPrice) {
      this.price = newPrice;
    });
}

const book1 = new Book(
  "E.B.White",
  "Charlotte`s Web",
  1990,
  "California",
  "harper",
  400
);
console.log("book1:>>", book1);

const book2 = new Book(
  "S.E.Hinton",
  "The Outsiders",
  1850,
  "Stockholm",
  "harper",
  600
);
console.log("book2:>>", book2);

const ageOfBook = book1.ageOfBook();
console.log(`Age of book1: ${ageOfBook}`);

book1.changePrice(900);
console.log("New Price of book1<<<", book1.price);
