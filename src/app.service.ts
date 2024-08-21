import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory } from '@nestjs/microservices';
import { LISTBOOOK } from './book/book.mock';

@Injectable()
export class AppService {



  getHello(): string {
    return 'Hello World!';
  }

  getAllBook() {
    return LISTBOOOK;
  }
}
