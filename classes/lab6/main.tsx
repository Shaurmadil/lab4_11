interface Engine {
    start(): string;
    stop(): string;
  }
  
interface ICE extends Engine {
  increaseSpeed(): string
  decreaseSpeed(): string;
}
  
  export class Diesel implements ICE {
    power: number;
    fuelType: string;
    fuelLevel: number;
  
    constructor(power: number, fuelLevel: number) {
      this.power = power;
      this.fuelType = 'Diesel';
      this.fuelLevel = fuelLevel;
    }
  
    start(): string {
      return 'diesel started';
    }
  
    stop(): string {
      return 'diesel stopped';
    }
    increaseSpeed(): string{
        return 'revolves increased'
    }
    decreaseSpeed(): string{
        return 'revolves decreased'
    }
  }
  
  export class ReactiveEngine implements Engine {
    power: number;
  
    constructor(power: number) {
      this.power = power;
    }
  
    start(): string {
      return'started reactive engine';
    }
  
    stop(): string {
      return 'stopped reactive engine';
    }
  }