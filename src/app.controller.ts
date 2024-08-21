import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern('getallbooks')
  async getAllBook() {
    const listBook = this.appService.getAllBook();
    return new Promise(reslove => reslove(listBook))
  }
}
