import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyService } from './company,service';
import { ComapnyController } from './company.controller';
import { Company, CompanySchema } from './company.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Company.name, schema: CompanySchema },
    ]),
  ],
  controllers: [ComapnyController],
  providers: [CompanyService],
})
export class ComapnyModule { }
