import { Body, Controller, Get, Put } from '@nestjs/common';
import { KmDto } from './km.dto';
import { TResponse } from 'src/app.type';
import { KmService } from './km.service';
import { KmEntity } from './km.entity';

@Controller('/km')
export class KmController {
  constructor(private readonly kmService: KmService) {}

  @Get('/')
  async exibeKm(): Promise<KmEntity> {
    return await this.kmService.exibeKm();
  }

  @Put('/')
  async atualizaKm(@Body() quilometragem: KmDto): Promise<TResponse.Put> {
    return await this.kmService.atualizaKm(quilometragem);
  }
}
