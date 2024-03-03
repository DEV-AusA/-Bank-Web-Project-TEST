import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Vehicle } from "./Vehicle"

@Entity({
    name: "users"   //* <= este  sera el nombre en la tabla de nuestra DB, se usa en plural para evitar conoflicto de nombres
  })  
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100 // <= con esto pongo la cantidad de caracteres que se ingresará en esta columna
    })
    name: string // VARCHAR max 100

    @Column()
    email: string

    @Column()
    active: boolean

    //* OPCION - @OneToOne
    // @OneToOne(() => Vehicle) // <= el decorator @OneToOne recibe un cb que retorna el Vehicle
    // // a @JoinColumn al no declararle algun argumento, TypeORM x convencion agregar Id a la columna vehicle, osea "vehicleId"
    // @JoinColumn() // <=  este decorator se utiliza junto con algun @OneToOne o @ManyToOne.
    // vehicle: Vehicle  // <= declaro la nueva entity y de valor le coloco la clase a referenciar

    //* OPCION - @ManyToOne
    // @OneToMany(() => Vehicle, ...): Este es el decorador que define la relación uno a muchos.

    // () => Vehicle: Este es un argumento de función que devuelve la clase de la entidad relacionada, en este caso, Vehicle. 
    // Indica que esta relación es de uno a muchos con la entidad Vehicle.
    
    // (vehicle => vehicle.user): Este es el segundo parámetro que especifica la función que define la relación inversa.
    // En este caso, estás especificando que la propiedad user en la entidad Vehicle establece la relación inversa. Esto significa que en la entidad Vehicle,
    // hay una propiedad llamada user que apunta a la entidad propietaria de esta relación, en este caso, la entidad que tiene la anotación @OneToMany

    @OneToMany(() => Vehicle, (vehicle => vehicle.user))
    vehicles: Vehicle[]
}