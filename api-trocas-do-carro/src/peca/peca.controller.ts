import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { PecaService } from "./peca.service";
import { PecaDto } from "./peca.dto";
import { TResponse } from "src/app.type";

@Controller('/peca')
export class PecaController {
  constructor(private readonly pecaService: PecaService) {}

  @Post('/')
  adicionaPeca(@Body() peca: PecaDto): TResponse.Post {
    return this.pecaService.adicionaPeca(peca);
  }

  @Get('/')
  exibePecas(): PecaDto[] {
    return this.pecaService.exibePecas();
  } 

  @Get('/:id')
  exibePecaPorId(@Param() id: number): PecaDto {
    return this.pecaService.exibePecaPorId(id);
  }

  @Put('/:id')
  atualizaPeca(
    @Param() id: number,
    @Body() peca: PecaDto, 
  ): TResponse.Put {
    return this.pecaService.atualizaPeca(peca);
  }
}
