
 export class Usuario{
    id: number;

    constructor(id:number){
        this.id = id;
    }

    public get getId(){
        return this.id;
    }

    public set setId(id: number){
        this.id =id;
    }
         
}