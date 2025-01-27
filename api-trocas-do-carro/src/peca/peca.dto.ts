import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class PecaDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @IsNotEmpty()
  @IsString()
  km_proxima_troca: string;

  @IsNotEmpty()
  @IsDateString()
  data_proxima_troca: string;
}