import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  inicio(): string {
    return 'API Trocas do Carro';
  }
}
