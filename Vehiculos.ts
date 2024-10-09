// Vehiculo.ts
export class Vehiculo {
    protected color: string;
    protected rodado: number;
    protected marca: string;
    protected anio: number;
    protected activo: boolean;


    constructor(color: string, rodado: number, marca: string, anio: number, activo: boolean) {
        this.color = color;
        this.rodado = rodado;
        this.marca = marca;
        this.anio = anio;
        this.activo = activo;
    }

    modificarVehiculo(color: string, rodado?: number, marca?: string, anio?: number, activo?: boolean) {
        if(color) this.color = color;
        if (rodado) this.rodado = rodado;
        if (marca) this.marca = marca;
        if (anio) this.anio = anio;
        if (activo !== undefined) this.activo = activo;
        return 'Vehiculo Modificado'
    }

    darDeBaja() {
        this.activo = false;
        return 'Vehiculo dado de baja'
    }

    getRodado() {
        return this.rodado;
    }

    setRodado(rodado: number) {
        this.rodado = rodado;
    }
}
