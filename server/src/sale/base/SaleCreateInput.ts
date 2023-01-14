/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ValidateNested, IsOptional, IsString, IsNumber } from "class-validator";
import { Type } from "class-transformer";
import { OrderCreateNestedManyWithoutSalesInput } from "./OrderCreateNestedManyWithoutSalesInput";

@InputType()
class SaleCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  totalPrice?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutSalesInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutSalesInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutSalesInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutSalesInput;
}

export { SaleCreateInput };
