import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { QuilometragemDto } from './km/km.dto';
import { TResponse } from './app.type'
import { PecaDto } from './peca/peca.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  inicio(): string {
    return this.appService.inicio();
  }

  

  
}
