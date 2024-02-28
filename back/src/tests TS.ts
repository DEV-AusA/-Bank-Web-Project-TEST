// numbers
const num1: number = 5;
const num2: number = 10;
// strings
const nombre: string = "Cesar";
const apellido: string = "Ausa";
// booleans
const alive: boolean = true;

// array numbers
const numPares: number[] = [2, 4, 6, 8, 10];
// array strings
const palabras: string[] = ["hola", "chau"];

// la prohibida "any"
let unaVariable: any = "Hola";
unaVariable = 5;
unaVariable = true;

const sumar = (a: number, b: number): number => a + b;

console.log(sumar(num1, num2));

// interfaces
interface IPersona {
  name: string;
  age: number;
  mail: string;
}
interface IPaciente extends IPersona {
  isAlive: boolean;
  carnet: number;
}

interface IDoctor extends IPersona {
  sector: string;
  especialidad: string;
  activo: boolean;
}

//enums

enum DoctorEspecialidad {
    PEDIATRIA = "Pediatria",
    OTORRINOLARINGOLOGIA = "Otorrinolaringologia",
    GINECOLOGIA = "Ginecologia",
    CARDIOLOGIA = "Cardiologia"
}

//declaro usando interfaces, types y enums
const paciente1: IPaciente = {
  name: "Cesar",
  age: 35,
  mail: "cesarausa@gmail.com",
  isAlive: true,
  carnet: 12345
};

const doctor1: IDoctor = {
    name: "Nicolas",
    age: 13,
    mail: "nicoausa@gmail.com",
    sector: "Terapia",
    especialidad: DoctorEspecialidad.PEDIATRIA,
    activo: true
}
