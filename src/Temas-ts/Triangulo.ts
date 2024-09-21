import { Punto, CalculadoraDistancia } from './Distancia';

// Definimos la clase Triangulo que utiliza objetos de la clase Punto
class Triangulo {
    private punto1: Punto;
    private punto2: Punto;
    private punto3: Punto;

    constructor(punto1: Punto, punto2: Punto, punto3: Punto) {
        this.punto1 = punto1;
        this.punto2 = punto2;
        this.punto3 = punto3;
    }

    // Método para verificar si los tres puntos forman un triángulo válido
    public esTrianguloValido(): boolean {
        const d1 = CalculadoraDistancia.calcularDistancia(this.punto1, this.punto2);
        const d2 = CalculadoraDistancia.calcularDistancia(this.punto2, this.punto3);
        const d3 = CalculadoraDistancia.calcularDistancia(this.punto3, this.punto1);

        // Usamos la desigualdad triangular para verificar si los tres puntos forman un triángulo
        return (d1 + d2 > d3) && (d1 + d3 > d2) && (d2 + d3 > d1);
    }
}

// Pruebas del programa
const puntoA = new Punto(1, 3);
const puntoB = new Punto(2, 2);
const puntoC = new Punto(3, 3);

const triangulo1 = new Triangulo(puntoA, puntoB, puntoC);

if (triangulo1.esTrianguloValido()) {
    console.log("Los puntos forman un triángulo válido.");
} else {
    console.log("Los puntos NO forman un triángulo válido.");
}

