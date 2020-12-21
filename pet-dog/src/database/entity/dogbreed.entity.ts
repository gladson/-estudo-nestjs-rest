import {Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn} from "typeorm";

@Entity()
export class DogBreed {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar", length: 300 })
    Name: string;

    @Column({ type: "varchar", length: 500 })
    PictureUrl: string;

}
