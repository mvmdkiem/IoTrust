
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrdersByUser(userId: number) {
    const orders = await this.prisma.order.findMany({
      where: { userId },
      include: { user: true }
    });
    return orders;
  }

  async createOrders(orderList: any[]) {
    const inserted = [];
    for (const order of orderList) {
      const newOrder = await this.prisma.order.create({ data: order });
      inserted.push(newOrder);
    }
    return { inserted: inserted.length };
  }
}
