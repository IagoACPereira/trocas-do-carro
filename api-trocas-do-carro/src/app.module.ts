import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuilometragemDto } from './km/km.dto';
import { PecaDto } from './peca/peca.dto';
import { KmModule } from './km/km.module';
import { PecaModule } from './peca/peca.module';

@Module({
  imports: [KmModule, PecaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
