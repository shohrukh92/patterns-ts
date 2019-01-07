interface ITransport {
  deliver: (payload: any) => void;
}

class Truck implements ITransport {
  deliver(payload: any): void {
    console.log('Truck delivers ' + payload);
  }
}

class Ship implements ITransport {
  deliver(payload: any): void {
    console.log('Ship delivers ' + payload);
  }
}

class Airplane implements ITransport {
  deliver(payload: any): void {
    console.log('deliver by air');
  }
}

abstract class Logistics {
  planDelivery(): void {
    const transport = this.createTransport();
    console.log(transport.deliver('books'));
  }

  abstract createTransport(): ITransport;
}

class RoadLogistics extends Logistics {
  createTransport(): ITransport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport() {
    return new Ship();
  }
}

class AirLogistics extends Logistics {
  createTransport(): ITransport {
    return new Airplane();
  }
}

// -----CLIENT CODE-----------------------------------------------------
class Client {
  logistics: Logistics;
  constructor(shipType: 'truck' | 'ship' | 'air') {
    if (shipType === 'truck') {
      this.logistics = new RoadLogistics();
    } else if (shipType === 'ship') {
      this.logistics = new SeaLogistics();
    } else {
      this.logistics = new AirLogistics();
    }
  }

  plan(): void {
    this.logistics.planDelivery();
  }
}

const c = new Client('ship');
c.plan();

const c1 = new Client('truck');
c1.plan();

const c2 = new Client('air');
c2.plan();
