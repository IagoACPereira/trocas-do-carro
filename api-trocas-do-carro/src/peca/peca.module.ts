import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PecaEntity } from './peca.entity';
import { KmEntity } from 'src/km/km.entity';
import { PecaService } from './peca.service';
import { PecaController } from './peca.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PecaEntity, KmEntity])],
  controllers: [PecaController],
  providers: [PecaService],
})
export class PecaModule {}
