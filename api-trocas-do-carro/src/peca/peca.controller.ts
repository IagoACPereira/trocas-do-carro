import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { PecaService } from "./peca.service";
import { PecaDto } from "./peca.dto";
import { TResponse } from "src/app.type";
import { PecaEntity } from "./peca.entity";

@Controller('/peca')
export class PecaController {
  constructor(private readonly pecaService: PecaService) {}

  @Post('/')
  async adicionaPeca(@Body() peca: PecaDto): Promise<TResponse.Post> {
    return await this.pecaService.adicionaPeca(peca);
  }

  @Get('/')
  async exibePecas(): Promise<PecaEntity[]> {
    return await this.pecaService.exibePecas();
  } 

  @Get('/:id')
  async exibePecaPorId(@Param('id') id: number): Promise<PecaEntity> {
    
    return await this.pecaService.exibePecaPorId(id);
  }

  @Put('/:id')
  async atualizaPeca(
    @Param('id') id: number,
    @Body() peca: PecaDto, 
  ): Promise<TResponse.Put> {
    return await this.pecaService.atualizaPeca(id, peca);
  }
}
