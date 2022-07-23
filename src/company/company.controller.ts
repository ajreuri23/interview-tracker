import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company,service';
import { Company } from './company.schema';

@ApiTags('company')
@Controller('company')
export class ComapnyController {
    constructor(private readonly companyService: CompanyService) { }

    @ApiResponse({type: Company})
    @Get()
    public async getAllCompanies(@Res() res): Promise<Company[]> {
        try {
            const companies: Company[] = await this.companyService.getAllCompanies();
            return res.status(HttpStatus.OK).json(companies);
        } catch (err) {
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json('Something went bad in getting all companies');
        }
    }

    @ApiResponse({ type: Company })
    @Post() 
    public async createCompany(@Res() res, @Body() companyDto: Company): Promise<Company> {
        try {
            const company: Company = await this.companyService.create(companyDto);
            return res.status(HttpStatus.OK).json(company);
        } catch (err) {
            return res.status(HttpStatus.BAD_REQUEST).json("Oops, something went wrong creating a company");
        }
    }
}
