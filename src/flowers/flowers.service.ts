import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDto } from './dto/flowers-dto';
import { ConfigService } from '@nestjs/config';
import { EnumAppMode } from 'src/types';

@Injectable()
export class FlowersService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly ConfigService: ConfigService,
  ) {}
  findAll() {
    console.log(this.ConfigService.get<EnumAppMode>('MODE'));
    return this.prisma.flower.findMany();

    // return [
    //   {
    //     name: 'Rose',
    //     color: 'Red',
    //     price: 99,
    //   },
    //   {
    //     name: 'Lily',
    //     color: 'Blue',
    //     price: 99,
    //   },
    //   {
    //     name: 'Tulip',
    //     color: 'Orange',
    //     price: 119,
    //   },
    // ];
  }
  create(dto: CreateFlowersDto) {
    return this.prisma.flower.create({ data: dto });
  }
}
