import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Contract {
    @ApiProperty()
    @Prop({ required: false })
    moneyBruto: number;

    @ApiProperty()
    @Prop({ required: false })
    vacationDays: number;

    @ApiProperty()
    @Prop({ required: false })
    moneyNeto: number;
}

export const ContractSchema = SchemaFactory.createForClass(Contract);