type BurgerSize = 'small' | 'medium' | 'big';

class Burger {
  protected size: BurgerSize;

  protected cheese = false;
  protected tomato = false;
  protected pepperoni = false;
  protected lettuce = false;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;

    this.cheese = builder.cheese;
    this.tomato = builder.tomato;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
  }

  describe() {
    console.log(`Burger description:
      size - ${this.size};
      cheese - ${this.cheese};
      tomato - ${this.tomato};
      pepperoni - ${this.pepperoni};
      lettuce - ${this.lettuce};
    `);
  }
}

class BurgerBuilder {
  size: BurgerSize;

  cheese = false;
  tomato = false;
  pepperoni = false;
  lettuce = false;

  constructor(size: BurgerSize = 'medium') {
    this.size = size;
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addTomato() {
    this.tomato = true;
    return this;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this;
  }

  addLettuce() {
    this.lettuce = true;
    return this;
  }

  build(): Burger {
    return new Burger(this);
  }
}

const burger = (new BurgerBuilder('small'))
  .addPepperoni()
  .addLettuce()
  .addTomato()
  .build();

burger.describe();
