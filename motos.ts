import { Vehiculo } from "./Vehiculos";
export class Moto extends Vehiculo{
    
    constructor(color: string,rodado:number,marca:string,anio:number,activo:boolean) {
        super(color,rodado,marca,anio,activo)        
    }
      


getColor():string{
    return this.color;
}

getRodado():number{
    return this.rodado;
}
setRodado(nuevoRodado:number):void{
    this.rodado = nuevoRodado;
}

getMarca():string{
    return this.marca;
}

getAnio(){
    return this.anio;
}

getActivo():boolean{
    return this.activo;
}

}

