import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('peca')
export class PecaEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  valor: number;

  @Column()
  km_troca: string;

  @Column()
  data_troca: Date;

  @Column()
  km_proxima_troca: string;

  @Column()
  data_proxima_troca: Date;
}