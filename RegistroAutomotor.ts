import { Auto } from "./Autos";

import{ Moto } from "./motos";

import{ Camion } from "./Camion";

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
