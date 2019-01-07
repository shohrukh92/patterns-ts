type EngineType = 'petrol' | 'diesel' | 'gas';

class Car {
  private name: string = 'Car';
  seats: number = 4;
  engineType: EngineType = 'petrol';
  hasTripComputer: boolean = false;
  hasGPS: boolean = false;

  showInfo(): void {
    console.log(`${this.engineType}, ${this.seats}`);
  }
}

class Bike {
  private name: string = 'Bike';
  seats: number = 1;
  engineType: EngineType = 'petrol';
  hasTripComputer: boolean = false;
  hasGPS: boolean = false;

  showGPSCoordinates(): void {
    // some cool logic here
    const [x, y] = [1, 2];
    console.log(x, y);
  }
}

interface IBuilder {
  reset(): void;
  setSeats(seatsCount: number);
  setEngine(engineType: EngineType);
  setTripComputer(value: boolean): void;
  setGPS(value: boolean): void;
}

class CarBuilder implements IBuilder {
  private car: Car;

  reset(): void {
    this.car = new Car();
  }

  setSeats(seatsCount: number): void {
    this.car.seats = seatsCount;
  }

  setEngine(engineType: EngineType): void {
    this.car.engineType = engineType;
  }

  setTripComputer(value: boolean): void {
    this.car.hasTripComputer = value;
  }

  setGPS(value: boolean): void {
    this.car.hasGPS = value;
  }

  getResult(): Car {
    return this.car;
  }
}

class BikeBuilder implements IBuilder {
  private bike: Bike;

  reset(): void {
    this.bike = new Bike();
  }

  setSeats(seatsCount: number): void {
    this.bike.seats = (seatsCount > 2) ? 2 : seatsCount;
  }

  setEngine(engineType: EngineType): void {
    this.bike.engineType = engineType;
  }

  setTripComputer(value: boolean): void {
    this.bike.hasTripComputer = value;
  }

  setGPS(value: boolean): void {
    this.bike.hasGPS = value;
  }

  getResult(): Bike {
    return this.bike;
  }
}



class Director {
  constructDieselCar(builder: IBuilder): void {
    builder.reset();
    builder.setSeats(4);
    builder.setEngine('diesel');
    builder.setTripComputer(true);
  }

  constructSuperCar(builder: IBuilder): void {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine('petrol');
    builder.setTripComputer(true);
    builder.setGPS(true);
  }

  constructBike(builder: IBuilder): void {
    builder.reset();
    builder.setSeats(1);
    builder.setEngine('petrol');
    builder.setGPS(true);
  }
}

function constructDieselCar(director: Director): void {
  const builder = new CarBuilder();
  director.constructDieselCar(builder);
  const car: Car = builder.getResult();
  console.log(car);
}

function constructSuperCar(director: Director): void {
  const builder = new CarBuilder();
  director.constructSuperCar(builder);
  const superCar: Car = builder.getResult();
  console.log(superCar);
}

function constructBike(director: Director): void {
  const builder = new BikeBuilder();
  director.constructBike(builder);
  const bike: Bike = builder.getResult();
  console.log(bike);
}

const mainDirector = new Director();
constructDieselCar(mainDirector);
constructSuperCar(mainDirector);
constructBike(mainDirector);
