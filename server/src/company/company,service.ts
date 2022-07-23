import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Company } from './company.schema';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company.name) private companyModel: Model<Company>) {}

    async getAllCompanies(): Promise<Company[]> {
        return await this.companyModel.find().exec();
    }

    async create(companyDto: Company): Promise<Company> {
        const company: Company = await new Company(companyDto).save();
        return company;
    }
}
