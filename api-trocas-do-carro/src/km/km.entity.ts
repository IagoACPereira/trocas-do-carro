import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('km')
export class KmEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantidade: string;
}