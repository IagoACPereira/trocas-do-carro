import { Module } from "@nestjs/common";
import { PecaController } from "./peca.controller";
import { PecaService } from "./peca.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PecaEntity } from "./peca.entity";

@Module({
  imports: [TypeOrmModule.forFeature([PecaEntity])],
  controllers: [PecaController],
  providers: [PecaService],
})
export class PecaModule {}
