import { Module } from "@nestjs/common";
import { SaleModuleBase } from "./base/sale.module.base";
import { SaleController } from "./sale.controller";
import { SaleResolver } from "./sale.resolver";
import { SaleService } from "./sale.service";

@Module({
  imports: [SaleModuleBase],
  controllers: [SaleController],
  providers: [SaleService, SaleResolver],
  exports: [SaleService],
})
export class SaleModule {}
