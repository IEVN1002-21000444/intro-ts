//Funciones

function sumar(){

}

function restar(a:number,b:number):number{
    return a-b;
}

const res=restar(10,2);
console.log(res)

interface Mascota{
    nombre: string;
    edad: number;
    mostrarEdad:()=>void;

}

function calcular(mascota:Mascota, x:number):void{
    mascota.edad
    console.log(mascota);

}

const nuevaMascota:Mascota={
    nombre:"Miau",
    edad:5,
    mostrarEdad()
    {
        console.log(`La edad de ${nuevaMascota.nombre} es ${this.edad}`)

    }        
}
calcular(nuevaMascota,4)
