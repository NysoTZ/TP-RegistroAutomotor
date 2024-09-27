export class Auto {
    private color:string;
    private rodado:number;
    private marca:string;
    private modelo:number;
    private vtv:boolean;
    private estado:boolean;
    
constructor(color: string,rodado:number,marca:string, modelo:number,vtv:boolean,estado:boolean = true) {
    this.color = color;
    this.rodado = rodado;
    this.marca = marca;
    this.modelo = modelo;
    this.vtv = vtv;
    this.estado = estado;
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

getModelo():number{
    return this.modelo;
}


getvtv():boolean{
    return this.vtv;
}

//  modificar vehiculo
modificarVehiculo(color?:string,rodado?:number,marca?:string, modelo?:number,vtv?:boolean){
    
    if(color) this.color = color;
    if(rodado) this.rodado = rodado;
    if(marca) this.marca = marca;
    if(modelo) this.modelo = modelo;
    if(vtv) this.vtv = vtv;
    return "Vehículo modificado exitosamente";
}
// pa dar de baja 
darDeBaja(){
    this.estado = false;
    return "Vehículo dado de baja";
}

}
