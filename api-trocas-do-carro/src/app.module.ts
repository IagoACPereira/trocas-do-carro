import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KmModule } from './km/km.module';
import { PecaModule } from './peca/peca.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KmEntity } from './km/km.entity';
import { PecaEntity } from './peca/peca.entity';

@Module({
  imports: [
    KmModule,
    PecaModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'trocas_do_carro',
      entities: [KmEntity, PecaEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
