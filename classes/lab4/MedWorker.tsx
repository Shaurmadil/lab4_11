export abstract class MedWorker{
    public name: string
    public occupation: string

    constructor(name : string, occupation : string){
        this.name = name
        this.occupation = occupation
    }
    
    abstract income() : number
} 