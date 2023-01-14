/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Order, Sale } from "@prisma/client";

export class SaleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.SaleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindManyArgs>
  ): Promise<number> {
    return this.prisma.customer.count(args);
  }

  async findMany<T extends Prisma.SaleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindManyArgs>
  ): Promise<Sale[]> {
    return this.prisma.sale.findMany(args);
  }
  async findOne<T extends Prisma.SaleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleFindUniqueArgs>
  ): Promise<Sale | null> {
    return this.prisma.sale.findUnique(args);
  }
  async create<T extends Prisma.SaleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleCreateArgs>
  ): Promise<Sale> {
    return this.prisma.sale.create<T>(args);
  }
  async update<T extends Prisma.SaleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CustomerUpdateArgs>
  ): Promise<Sale> {
    return this.prisma.sale.update<T>(args);
  }
  async delete<T extends Prisma.SaleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.SaleDeleteArgs>
  ): Promise<Sale> {
    return this.prisma.sale.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.customer
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }
}
