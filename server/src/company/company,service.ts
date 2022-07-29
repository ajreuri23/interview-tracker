import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';
import {Company, CompanyDocument, CompanySchema} from './company.schema';

@Injectable()
export class CompanyService {
    constructor(@InjectModel(Company.name) private companyModel: Model<CompanyDocument>) {
    }

    async getAllCompanies(): Promise<Company[]> {
        const companies: Company[] = await this.companyModel.find().lean().exec();

        return companies;
    }

    async create(companyDto: Company): Promise<Company> {
        let foundCompany = await this.companyModel.find({name: companyDto.name}).exec();

        if (foundCompany && foundCompany.length) {
            const updatedCompany = await this.companyModel.findOneAndUpdate({ name: companyDto.name }, companyDto).exec();
            return updatedCompany;
        } else {
            const companyDocument = new this.companyModel(companyDto);
            const company: Company = await companyDocument.save();
            return company;
        }
    }
}
