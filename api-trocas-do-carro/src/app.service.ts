import { Injectable } from '@nestjs/common';
import { TResponse } from './app.type';
import { KmDto } from './km/km.dto';
import { PecaDto } from './peca/peca.dto';

@Injectable()
export class AppService {
  inicio(): string {
    return 'API Trocas do Carro';
  }

  

  
}
