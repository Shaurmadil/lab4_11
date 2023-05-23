import { Doctor } from "./classes/lab4/Doctor";
import { Nurse } from "./classes/lab4/Nurse";


describe("Doctor", () => {
    test("constructor", () => {
        const doctor = new Doctor("John Doe", "Doctor", 50);
        expect(doctor.name).toBe("John Doe");
        expect(doctor.occupation).toBe("Doctor");
        expect(doctor.patientsPerWeek).toBe(50);})

    test("income calculation", () => {
        const doctor = new Doctor("John Doe", "Doctor", 50);
        expect(doctor.income()).toBe(50 * 8);
  });
});

describe("Nurse", () => {
    test("constructor", () => {
        const nurse = new Nurse("Jane Doe", "Nurse", 42);
        expect(nurse.name).toBe("Jane Doe");
        expect(nurse.occupation).toBe("Nurse");
        expect(nurse.hoursPerWeek).toBe(42);
      })
    test("income calculation", () => {
        const nurse = new Nurse("Jane Doe", "Nurse", 42);
        expect(nurse.income()).toBe(42 * 10);
  });
});