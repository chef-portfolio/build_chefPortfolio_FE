import faker from "faker";

function generate_data() {
  class Chef {
    constructor(name, pic, org, loc, contact) {
      this.name = name;
      this.pic = pic;
      this.org = org;
      this.loc = loc;
      this.contact = contact;
    }
  }  

  class Recipe {
    constructor(name, type, pic, chef, ingreds, direcs) {
      this.name = name;
      this.type = type;
      this.pic = pic;
      this.chef = chef;
      this.ingreds = ingreds;
      this.direcs = direcs;
    }
  }

  const mealTypes = ["breakfast", "lunch", "dinner", "dessert", "snack"];

  let chefs = new Array(10); 

  for (let i = 0; i < chefs.length; i++) {
    chefs[i] = new Chef(
      `${faker.name.firstName()} ${faker.name.lastName()}`,
      faker.image.avatar(),
      faker.company.companyName(),
      `${faker.address.city()}, ${faker.address.stateAbbr()}`,
      Math.random > 0.5 ? faker.internet.email() : faker.phone.phoneNumber()
    );
  }

  let recipes = new Array(40);

  for (let i = 0; i < recipes.length; i++) {
    let ingredient_count = Math.floor(Math.random() * 12 + 2);
    let ingreds = new Array(ingredient_count);

    for (let j = 0; j < ingreds.length; j++) {
      ingreds[j] = faker.lorem.words();
    }

    recipes[i] = new Recipe(
      faker.lorem.words(),
      mealTypes[Math.floor(Math.random() * mealTypes.length)],
      faker.image.food(),
      chefs[Math.floor(Math.random() * chefs.length)],
      ingreds,
      faker.lorem.paragraphs()
    );
  }
  return { recipes, chefs };
}

export default generate_data;
