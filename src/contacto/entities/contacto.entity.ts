import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contacto {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    nombre: string;

    @Column()
    telefono: string;

    @Column()
    correo: string;

    @Column()
    edad:number;

    @Column()
    activo:boolean;
}