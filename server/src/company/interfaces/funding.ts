import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Funding {
    @ApiProperty()
    @Prop({ required: true})
    fundingWave: number;

    @ApiProperty()
    @Prop({ required: true })
    amountFundedInUsd: number;
}

export const FundingSchema = SchemaFactory.createForClass(Funding);