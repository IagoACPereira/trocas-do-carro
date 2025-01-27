import { IsNotEmpty, IsNumber } from 'class-validator';

export class QuilometragemDto {
  @IsNotEmpty()
  @IsNumber()
  km: number;
}
