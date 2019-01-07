class President {
  private signedOrders: number;
  private static instance: President;

  private constructor() { };

  static getInstance(): President {
    if (!President.instance) {
      President.instance = new President();
      President.instance.signedOrders = 0;
    }

    return President.instance;
  }

  signOrder(): void {
    console.log('President is signing order...')
    this.signedOrders += 1;
  }

  signedOrdersCount(): number {
    return this.signedOrders;
  }
}

const president1 = President.getInstance();
const president2 = President.getInstance();

console.log(president1 === president2); // true

president1.signOrder();

console.log(president1.signedOrdersCount() === president2.signedOrdersCount()) // true
