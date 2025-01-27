import { TResponse } from "src/app.type";
import { QuilometragemDto } from "./km.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class KmService {
  exibeKm(): QuilometragemDto {
      return {
        km: 10000,
      };
    }
  
    atualizaKm(quilometragem: QuilometragemDto): TResponse.Put {
      return {
        mensagem: 'Quilometragem atualizada com sucesso',
        dados: quilometragem,
        statusCode: 200,
      };
    }
}