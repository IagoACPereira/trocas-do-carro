import { TResponse } from "src/app.type";
import {  KmDto } from "./km.dto";
import { Injectable } from "@nestjs/common";
import { KmEntity } from "./km.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class KmService {
  constructor(
    @InjectRepository(KmEntity) 
    private kmRepository: Repository<KmEntity>
  ) {}
  
  async exibeKm(): Promise<KmEntity> {
    const km = await this.kmRepository.findOne({
      where: { id: 1 },
    })
    
    if (!km) throw new Error('Quilometragem não encontrada');

    return km;
  }

  async atualizaKm(km: KmDto): Promise<TResponse.Put> {
    await this.kmRepository.update({ id: 1 }, km);

    return {
        mensagem: 'Quilometragem atualizada com sucesso',
        dados: km,
        statusCode: 200,
      };
  }
}