// ------------ BASE PROTOTYPE ----------------------
abstract class Shape {
  public x: number;
  public y: number;
  public color: string;

  constructor(source?: Shape) {
    if (source) {
      this.x = source.x;
      this.y = source.y;
      this.color = source.color;
    }
  }

  abstract clone(): Shape;
}

// ------------ CONCRETE PROTOTYPES --------------------
class Rectangle extends Shape {
  public width: number;
  public height: number;

  constructor(source?: Rectangle) {
    super(source);
    if (source) {
      this.width = source.width;
      this.height = source.height;
    }
  }

  clone(): Shape {
    return new Rectangle(this);
  }
}

class Circle extends Shape {
  public radius: number;

  constructor(source?: Circle) {
    super(source);
    if (source) {
      this.radius = source.radius;
    }
  }

  clone(): Shape {
    return new Circle(this);
  }
}

// ------------- CLIENT CODE ---------------------------

function createShapes(): Shape[] {
  const shapes: Shape[] = [];

  const circle = new Circle();
  circle.x = 1;
  circle.y = 2;
  circle.color = 'red';
  circle.radius = 3;
  
  shapes.push(circle);
  shapes.push(circle.clone());
  circle.color = 'modified_red';

  const rectangle = new Rectangle();
  rectangle.x = 11;
  rectangle.y = 22;
  rectangle.width = 111;
  rectangle.height = 222;
  rectangle.color = 'blue';

  shapes.push(rectangle);
  shapes.push(rectangle.clone());
  rectangle.color = 'modified_blue';

  return shapes;
}

const arr = createShapes();
arr.forEach(shape => console.log(shape.color));
