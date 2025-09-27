import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // 1) 사용자 50명 생성
  const users = [];
  for (let i = 1; i <= 50; i++) {
    users.push({ id: i, name: `User${i}` });
  }

  await prisma.user.createMany({
    data: users
  });

  // 2) 각 사용자마다 주문 200건씩 생성 (총 10,000건)
  const orders = [];
  for (let u = 1; u <= 50; u++) {
    for (let j = 1; j <= 200; j++) {
      orders.push({
        userId: u,
        productId: j,                              
        quantity: Math.floor(Math.random() * 10) + 1 // 1~10 사이 랜덤 수량
      });
    }
  }

  await prisma.order.createMany({
    data: orders
  });
}

main().finally(() => prisma.$disconnect());
