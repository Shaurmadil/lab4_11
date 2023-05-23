import { Diesel, ReactiveEngine } from "../../classes/lab6/main";

describe('Diesel class', () => {
    const dieselEngine = new Diesel(100, 50);
  
    test('should create Diesel engine with specified power and fuel level', () => {
      expect(dieselEngine.power).toBe(100);
      expect(dieselEngine.fuelType).toBe('Diesel');
      expect(dieselEngine.fuelLevel).toBe(50);
    });
  
    test('should start and stop Diesel engine', () => {
      expect(dieselEngine.start()).toBe('diesel started');
      expect(dieselEngine.stop()).toBe('diesel stopped');
    });
  
    test('should increase and decrease Diesel engine speed', () => {
      expect(dieselEngine.increaseSpeed()).toBe('revolves increased');
      expect(dieselEngine.decreaseSpeed()).toBe('revolves decreased');
    });
  });
  
  describe('ReactiveEngine class', () => {
    const reactiveEngine = new ReactiveEngine(200);
  
    test('should create ReactiveEngine with specified power', () => {
      expect(reactiveEngine.power).toBe(200);
    });
  
    test('should start and stop ReactiveEngine', () => {
      expect(reactiveEngine.start()).toBe('started reactive engine');
      expect(reactiveEngine.stop()).toBe('stopped reactive engine');
    });
  });