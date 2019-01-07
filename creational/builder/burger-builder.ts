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

  describe(): void {
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

  addCheese(): BurgerBuilder {
    this.cheese = true;
    return this;
  }

  addTomato(): BurgerBuilder {
    this.tomato = true;
    return this;
  }

  addPepperoni(): BurgerBuilder {
    this.pepperoni = true;
    return this;
  }

  addLettuce(): BurgerBuilder {
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
