// Clase Punto
export class Punto {
    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    // Getter para X
    public getX(): number {
        return this.x;
    }

    // Getter para Y
    public getY(): number {
        return this.y;
    }
}

// Clase para calcular la distancia
export class CalculadoraDistancia {
    public static calcularDistancia(punto1: Punto, punto2: Punto): number {
        const dx = punto2.getX() - punto1.getX();
        const dy = punto2.getY() - punto1.getY();
        return Math.sqrt(dx * dx + dy * dy);
    }
}

// Prueba de cálculo de distancia
const puntoA = new Punto(2.3, 3.2);
const puntoB = new Punto(5.1, 7.4);

const distancia = CalculadoraDistancia.calcularDistancia(puntoA, puntoB);
console.log(`La distancia entre los dos puntos es: ${distancia}`);
