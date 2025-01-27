import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class KmDto {
  @IsNotEmpty()
  @IsString()
  quantidade: string;
}
