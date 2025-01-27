import { Injectable } from "@nestjs/common";
import { PecaDto } from "./peca.dto";
import { TResponse } from "src/app.type";

@Injectable()
export class PecaService {
  adicionaPeca(peca: PecaDto): TResponse.Post {
    return {
      mensagem: 'Peça adicionada com sucesso',
      dados: peca,
      statusCode: 201,
    };
  }

  exibePecas(): PecaDto[] {
    return [
      {
        nome: 'Filtro de óleo',
        valor: 20.0,
        data: '2021-01-01',
        km_troca: 10000,
        km_proxima_troca: 20000,
        data_proxima_troca: '2025-06-01',
      },
      {
        nome: 'Filtro de ar',
        valor: 30.0,
        data: '2021-01-01',
        km_troca: 20000,
        km_proxima_troca: 30000,
        data_proxima_troca: '2025-06-01',
      },
    ];
  }

  exibePecaPorId(id: number): PecaDto {
    return {
      nome: 'Filtro de óleo',
      valor: 20.0,
      data: '2021-01-01',
      km_troca: 10000,
      km_proxima_troca: 20000,
      data_proxima_troca: '2025-06-01',
    };
  }

  atualizaPeca(peca: PecaDto): TResponse.Put {
    return {
      mensagem: 'Peça atualizada com sucesso',
      dados: peca,
      statusCode: 200,
    };
  }
}
