import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Funding {
    @ApiProperty()
    @Prop({ required: false})
    fundingWave: number;

    @ApiProperty()
    @Prop({ required: false })
    amountFundedInUsd: number;
}

export const FundingSchema = SchemaFactory.createForClass(Funding);