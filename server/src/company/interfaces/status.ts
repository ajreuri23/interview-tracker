import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

enum StatusType {
    Freeze = 'Freeze',
    Rejected = 'Rejected',
    InProgress = 'In Progress',
    DidntWant = 'Didnt Want'
};

enum StatusStage {
    Apply = 'Apply',
    HR = 'HR',
    firstInterview = '1st Technical Interview',
    secondInterview = '2nd Technical Interview',
    Meetup = 'HR Meetup',
    Contract = 'Contract'
};

enum StatusTiming {
    After = 'After',
    WaitingFor = 'Waiting For'
};

@Schema()
export class Status {
    @ApiProperty()
    @Prop({ type: String, enum: StatusType })
    status: StatusType;

    @ApiProperty()
    @Prop({ type: String, enum: StatusStage })
    stage: StatusStage;

    @ApiProperty()
    @Prop({ type: String, enum: StatusTiming })
    timing: StatusTiming;

    @ApiProperty()
    @Prop({ type: Date })
    date: Date;
}

export const StatusSchema = SchemaFactory.createForClass(Status);