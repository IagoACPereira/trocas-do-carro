import { Module } from "@nestjs/common";
import { KmController } from "./km.controller";
import { KmService } from "./km.service";

@Module({
  imports: [],
  controllers: [KmController],
  providers: [KmService],
})
export class KmModule {}
