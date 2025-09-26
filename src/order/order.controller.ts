
import { Controller, Get, Post, Body, Query, BadRequestException } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders(@Query('userId') userId: string) {
    const id = parseInt(userId);
    if (!id) throw new BadRequestException('userId is required');
    return this.orderService.getOrdersByUser(id);
  }

  @Post()
  createOrders(@Body() orders: any[]) {
    if (!Array.isArray(orders) || orders.length === 0) {
      throw new BadRequestException('Order list required');
    }
    return this.orderService.createOrders(orders);
  }
}
