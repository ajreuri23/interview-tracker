import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Contract {
    @ApiProperty()
    @Prop({ required: true })
    moneyBruto: number;

    @ApiProperty()
    @Prop({ required: true })
    vacationDays: number;

    @ApiProperty()
    @Prop({ required: true })
    moneyNeto: number;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);