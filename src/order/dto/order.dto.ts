import { IsInt } from 'class-validator';

export class CreateOrderDto {
  @IsInt()
  userId!: number;

  @IsInt()
  productId!: number;

  @IsInt()
  quantity!: number;
}
