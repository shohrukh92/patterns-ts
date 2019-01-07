// ----- ABSTRACT PRODUCTS -------------------
interface IChair {
  hasLegs(): boolean;
  sitOn(): void;
}

interface ISofa {
  width: number;
  lieOn(): void;
}

// ----- CONCRETE PRODUCTS -------------------
class VictorianChair implements IChair {
  hasLegs(): boolean {
    return true;
  }

  sitOn(): void {
    console.log('sit on victorian chair');
  }
}

class ModernChair implements IChair {
  hasLegs(): boolean {
    return false;
  }

  sitOn(): void {
    console.log('sit on modern chair');
  }
}

class VictorianSofa implements ISofa {
  width = 200;
  lieOn(): void {
    console.log('lie on victorian sofa');
  }
}

class ModernSofa implements ISofa {
  width = 100;
  lieOn(): void {
    console.log('lie on modern sofa');
  }
}

// ------------- ABSTRACT FACTORY --------------------
interface IFurnitureFactory {
  createChair(): IChair;
  createSofa(): ISofa;
}

// ------------- CONCRETE FACTORIES --------------------
class VictorianFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new VictorianChair();
  }

  createSofa(): ISofa {
    return new VictorianSofa();
  }
}

class ModenrFurnitureFactory implements IFurnitureFactory {
  createChair(): IChair {
    return new ModernChair();
  }

  createSofa(): ISofa {
    return new ModernSofa();
  }
}

// --------------- CLIENT CLASS --------------------------
class ClientClass {
  private sofa: ISofa;
  private chair: IChair;

  constructor(private factory: IFurnitureFactory) {
    this.sofa = this.factory.createSofa();
  }

  lieOnSofa(): void {
    this.sofa.lieOn();
  }
}

const cc1 = new ClientClass(new VictorianFurnitureFactory());
cc1.lieOnSofa();

const cc2 = new ClientClass(new ModenrFurnitureFactory());
cc2.lieOnSofa();
