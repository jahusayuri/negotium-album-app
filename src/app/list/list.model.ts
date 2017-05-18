export class List {
    public description: string;
    public taskName: string;

    constructor(desc: string, taskname: string){
        this.taskName = taskname;
        this.description = desc;
    }
}