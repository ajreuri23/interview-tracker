import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

enum WorkModelType {
    OnSite = 'On Site',
    Hybrid = 'Hybrid',
    Remote = 'Remote'
};

@Schema()
export class WorkModel {
    @ApiProperty()
    @Prop({ type: String, enum: WorkModelType })
    type: WorkModelType;

    @ApiProperty()
    @Prop({ required: false, isInteger: true })
    amountOfDaysOnSite: Number;
}

export const WorkModelSchema = SchemaFactory.createForClass(WorkModel);
