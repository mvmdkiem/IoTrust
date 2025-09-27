import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateOrderDto } from './dto/order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrdersByUser(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      include: { user: true },
    });
  }

  async createOrders(orderList: CreateOrderDto[]) {
    const result = await this.prisma.$transaction(
      orderList.map((order) =>
        this.prisma.order.create({ data: order }),
      ),
    );
    return { inserted: result.length };
  }
}
