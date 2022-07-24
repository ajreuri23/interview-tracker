import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Mongoose, Types } from 'mongoose';
import { CompanyType } from './enums/company-type.enum';
import { JobType } from './enums/job-type.enum';
import { Contract, ContractSchema } from './interfaces/contract';
import { Funding, FundingSchema } from './interfaces/funding';
import { Status, StatusSchema } from './interfaces/status';
import { Location, LocationSchema } from './interfaces/location';
import { ApiProperty } from '@nestjs/swagger';
import { WorkModel, WorkModelSchema } from './interfaces/work-model';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
    @ApiProperty({ required: true, type: String})
    @Prop({ required: true, unique: true })
    name: string;

    @ApiProperty({ type: String, enum: JobType, required: true})
    @Prop({ type: String, enum: JobType, required: true })
    jobType: JobType;

    @ApiProperty({ type: String, enum: CompanyType, required: true })
    @Prop({ type: String, enum: CompanyType, required: true })
    companyType: CompanyType;

    @ApiProperty({ required: false })
    @Prop({ required: false, isInteger: true })
    workerAmount?: number;

    @ApiProperty({ required: false })
    @Prop({ type: LocationSchema, required: false })
    location?: Location;

    @ApiProperty({ required: false })
    @Prop({ required: false, isInteger: true })
    timeToGetInMinutes?: number;

    @ApiProperty({ required: false })
    @Prop({ required: false })
    technologies?: string[];

    @ApiProperty({ required: false })
    @Prop({ type: StatusSchema, required: false })
    status?: Status;

    @ApiProperty({ required: false })
    @Prop({ type: ContractSchema, required: false })
    contract?: Contract;

    @ApiProperty({ required: false })
    @Prop({ required: false })
    description?: string;

    @ApiProperty({ required: false })
    @Prop({ type: FundingSchema, required: false })
    funding?: Funding;

    @ApiProperty({ required: false })
    @Prop({ type: WorkModelSchema, required: false })
    workModel?: WorkModel;
};

export const CompanySchema = SchemaFactory.createForClass(Company);
