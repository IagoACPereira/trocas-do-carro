import { Module } from "@nestjs/common";
import { PecaController } from "./peca.controller";
import { PecaService } from "./peca.service";


@Module({
  imports: [],
  controllers: [PecaController],
  providers: [PecaService],
})
export class PecaModule {}
