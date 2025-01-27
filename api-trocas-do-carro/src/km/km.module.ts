import { Module } from '@nestjs/common';
import { KmController } from './km.controller';
import { KmService } from './km.service';
import { KmEntity } from './km.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([KmEntity])],
  controllers: [KmController],
  providers: [KmService],
})
export class KmModule {}
