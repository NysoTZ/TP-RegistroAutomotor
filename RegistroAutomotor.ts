import { Auto } from "./Autos";
import{ Moto } from "./motos";
import{ Camion } from "./Camion";



export class RegistroAutomor{
    private auto:Auto;
    private moto:Moto;
    private camion:Camion;
    
    constructor(auto:Auto,moto:Moto,camion:Camion){

        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
    }
}






//      EJEMPLO DE MOTO
const motoGP = new Moto("Azul",21,"honda",2018,true);
console.log(motoGP);
console.log(motoGP.modificarVehiculo("Verde",19,"Honda",2018,true));
console.log(motoGP);
console.log(motoGP.darDeBaja());
console.log(motoGP);




//      EJEMPLO DE AUTO
const auto1 = new Auto("Rojo",14,"kuchau2",2012,true);
console.log(auto1.getRodado());
auto1.setRodado(18)
console.log(auto1.getRodado());
console.log(auto1.modificarVehiculo("negro",20,"toyota",-1300,true));
console.log(auto1);
console.log(auto1.darDeBaja());
console.log(auto1);



//      EJEMPLO DE CAMION   
const camion = new Camion("azul",295,"fiat 1114",1986,true);
console.log(camion);
console.log(camion.modificarVehiculo("Violeta",290,"Fiat",1986,true));
console.log(camion);
console.log(camion.darDeBaja());
console.log(camion);






const auto = new Auto("Rojo",14,"kuchau",2012,true);
const moto1 = new Moto ("Rojo",20, "Motomel Skua",2013,true);
const registro = new RegistroAutomor(auto,moto1,camion);


// console.log(registro);
