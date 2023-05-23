import { MedWorker } from "./MedWorker";

export class Doctor extends MedWorker{
    public patientsPerWeek : number
    constructor(name: string, occupation: string, patientsPerWeek : number = 40){
        super(name, occupation)
        this.patientsPerWeek = patientsPerWeek
    }
    
    override income(): number {
        return this.patientsPerWeek * 8
    }
}