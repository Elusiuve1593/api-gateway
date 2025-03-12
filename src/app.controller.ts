import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateOrderRequest } from './greate-order-request.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createOrderRequest(@Body() body: CreateOrderRequest) {
    return this.appService.createOrderRequest(body)
  }
}
