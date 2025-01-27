import { Body, Controller, Get, Put } from "@nestjs/common";
import { QuilometragemDto } from "./km.dto";
import { TResponse } from "src/app.type";
import { KmService } from "./km.service";

@Controller('/km')
export class KmController {
  constructor(private readonly kmService: KmService) {}

  @Get('/')
    exibeKm(): QuilometragemDto {
      return this.kmService.exibeKm();
    }
  
    @Put('/')
    atualizaKm(@Body() quilometragem: QuilometragemDto): TResponse.Put {
      return this.kmService.atualizaKm(quilometragem);
    }
}