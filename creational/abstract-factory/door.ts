
// ---------- Doors abstraction & implementation ----------
interface Door {
  getDescription: () => void;
}

class WoodenDoor implements Door {
  getDescription(): void {
    console.log('I am a wooden door');
  }
}

class IronDoor implements Door {
  getDescription(): void {
    console.log('I am an iron door');
  }
}

// ---------- Experts abstraction & implementation ----------
interface DoorFittingExpert {
  getDescription: () => void;
}

class Carpenter implements DoorFittingExpert {
  getDescription(): void {
    console.log('I can only fit wooden doors');
  }
}

class Welder implements DoorFittingExpert {
  getDescription(): void {
    console.log('I can only fit iron doors');
  }
}

// ---------- Abstract Factory Logic ----------
interface DoorFactory {
  makeDoor(): Door;
  makeFittingExpert(): DoorFittingExpert;
}

// Wooden door factory returns carpenter and wooden door
class WoodenDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new WoodenDoor();
  }

  makeFittingExpert(): DoorFittingExpert {
    return new Carpenter();
  }
}

// Iron door factory returns iron door and welder
class IronDoorFactory implements DoorFactory {
  makeDoor(): Door {
    return new IronDoor();
  }

  makeFittingExpert(): DoorFittingExpert {
    return new Welder();
  }
}

// ---------- Usage ----------
let door: Door;
let expert: DoorFittingExpert;

const woodenFactory = new WoodenDoorFactory();
door = woodenFactory.makeDoor();
expert = woodenFactory.makeFittingExpert();

door.getDescription();  // I am a wooden door
expert.getDescription(); // I can only fit wooden doors

const ironFactory = new IronDoorFactory();
door = ironFactory.makeDoor();
expert = ironFactory.makeFittingExpert();

door.getDescription();  // I am an iron door
expert.getDescription(); // I can only fit iron doors
