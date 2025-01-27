import { Injectable } from '@nestjs/common';
import { PecaDto } from './peca.dto';
import { TResponse } from 'src/app.type';
import { InjectRepository } from '@nestjs/typeorm';
import { PecaEntity } from './peca.entity';
import { Repository } from 'typeorm';
import { KmEntity } from 'src/km/km.entity';

@Injectable()
export class PecaService {
  constructor(
    @InjectRepository(PecaEntity)
    private pecaRepository: Repository<PecaEntity>,
    @InjectRepository(KmEntity)
    private kmRepository: Repository<KmEntity>,
  ) {}

  async adicionaPeca(peca: PecaDto): Promise<TResponse.Post> {
    const km = await this.kmRepository.findOne({
      where: { id: 1 },
    });

    if (!km) throw new Error('Km não encontrado');

    const data = new Date().toISOString().split('T')[0];

    const dados = {
      ...peca,
      km_troca: km.quantidade,
      data_troca: data,
    };

    const novaPeca = await this.pecaRepository.save(dados);

    return {
      mensagem: 'Peça adicionada com sucesso',
      dados: novaPeca,
      statusCode: 201,
    };
  }

  async exibePecas(): Promise<(PecaEntity & { km_restante: string })[]> {
    const pecas = await this.pecaRepository.find({
      order: {
        id: 'ASC',
      },
    });

    const km = await this.kmRepository.findOne({
      where: {
        id: 1,
      },
    });

    if (!km) throw new Error('Km não encontrado');

    const pecasComKmRestate = [] as (PecaEntity & { km_restante: string })[];

    for (const peca of pecas) {
      const kmRestante = String(
        Number(peca.km_troca) +
          Number(peca.km_proxima_troca) -
          Number(km.quantidade),
      );

      pecasComKmRestate.push({ ...peca, km_restante: kmRestante });
    }

    return pecasComKmRestate;
  }

  async exibePecaPorId(
    id: number,
  ): Promise<PecaEntity & { km_restante: string }> {
    const peca = await this.pecaRepository.findOne({
      where: { id },
    });

    if (!peca) throw new Error('Peça não encontrada');

    const km = await this.kmRepository.findOne({
      where: {
        id: 1,
      },
    });

    if (!km) throw new Error('Km não encontrado');

    const kmRestante = String(
      Number(peca.km_troca) +
        Number(peca.km_proxima_troca) -
        Number(km.quantidade),
    );

    return {
      ...peca,
      km_restante: kmRestante,
    };
  }

  async atualizaPeca(id: number, peca: PecaDto): Promise<TResponse.Put> {
    await this.pecaRepository.update(id, peca);

    return {
      mensagem: 'Peça atualizada com sucesso',
      dados: peca,
      statusCode: 200,
    };
  }
}
