import { MedWorker } from "./MedWorker";

export class Nurse extends MedWorker{
    hoursPerWeek : number
    constructor(name: string, occupation: string, hoursPerWeek : number = 38){
        super(name, occupation)
        this.hoursPerWeek = hoursPerWeek
    }

    override income(): number {
        return this.hoursPerWeek * 10
    }
}