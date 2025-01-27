import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PecaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
  
  @IsNotEmpty()
  @IsNumber()
  km_troca: number;

  @IsNotEmpty()
  @IsDateString()
  data: string;

  @IsNotEmpty()
  @IsNumber()
  km_proxima_troca: number;

  @IsNotEmpty()
  @IsDateString()
  data_proxima_troca: string;
}