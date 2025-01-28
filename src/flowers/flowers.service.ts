import { Injectable } from '@nestjs/common';

@Injectable()
export class FlowersService {
  findAll() {
    return [
      {
        name: 'Rose',
        color: 'Red',
        price: 99,
      },
      {
        name: 'Lily',
        color: 'Blue',
        price: 99,
      },
      {
        name: 'Tulip',
        color: 'Orange',
        price: 119,
      },
    ];
  }
}
