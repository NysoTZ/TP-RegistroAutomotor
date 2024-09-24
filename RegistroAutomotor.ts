class RegistroAutomor{
    private auto:Auto;
    private moto:Moto;
    private camion:Camion;
    
    constructor(auto:Auto,moto:Moto,camion:Camion){
        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
    }
}

class Auto {
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



class Moto {
    private color:string;
    private rodado:number;
    private marca:string;
    private modelo:number;
    private vtv:boolean;
    private estado:boolean;
    

    constructor(color: string,rodado:number,marca:string,modelo:number,vtv?:boolean,estado:boolean = true) {
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



class Camion {
    private color:string;
    private rodado:number;
    private marca:string;
    private modelo:number;
    private vtv:boolean;
    private estado:boolean;
    
constructor(color: string,rodado:number,marca:string,modelo:number,vtv:boolean,estado:boolean = true) {
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

const auto = new Auto("Rojo",14,"kuchau",2012,true);
const auto1 = new Auto("Rojo",14,"kuchau2",2012,true);
console.log(auto1.getRodado());
auto1.setRodado(18)
console.log(auto1.getRodado());
console.log(auto1.modificarVehiculo("negro",20,"toyota",-1300,true));
console.log(auto1.darDeBaja());
console.log(auto1);





const moto = new Moto ("Rojo",20, "Motomel Skua",2013, true);
const moto1 = new Moto ("Rojo",20, "Motomel Skua",2013,true);


const camion = new Camion("azul",295,"fiat 1114",1986,true);

camion.modificarVehiculo("blanco")
const registro = new RegistroAutomor(auto1,moto1,camion);


console.log(registro);
