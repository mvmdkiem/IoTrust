/*
  Warnings:

  - A unique constraint covering the columns `[userId,productId]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Order_userId_productId_key" ON "Order"("userId", "productId");

-- CreateIndex
CREATE UNIQUE INDEX "User_name_key" ON "User"("name");
