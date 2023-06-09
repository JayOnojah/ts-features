class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class MotorCar extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Vroom!!!');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new MotorCar(4, 'red');
car.startDrivingProcess();
