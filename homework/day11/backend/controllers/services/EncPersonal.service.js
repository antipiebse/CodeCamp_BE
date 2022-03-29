export class EncPersonal{
    constructor(personal){
        this.personal = personal
    }
    encPersonal(){
        this.personal.slice(0, 7).padEnd(14, "*")
    }
    
}