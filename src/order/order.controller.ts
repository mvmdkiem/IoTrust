import { Controller, Get, Post, Body, Query, BadRequestException, ParseIntPipe, ValidationPipe, } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/order.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders(@Query('userId', ParseIntPipe) userId: number) {
    return this.orderService.getOrdersByUser(userId);
  }

  @Post()
  createOrders(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    orders: CreateOrderDto[],
  ) {
    if (!Array.isArray(orders) || orders.length === 0) {
      throw new BadRequestException('Order list required');
    }
    return this.orderService.createOrders(orders);
  }
}
