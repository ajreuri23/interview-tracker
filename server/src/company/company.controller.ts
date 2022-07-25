import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CompanyService } from './company,service';
import { Company } from './company.schema';
import { CloseListFilter, Filter, RangeFilter } from './interfaces/filter';
import { FilterMakerService } from '../common/services/filter-maker.service';

@ApiTags('company')
@Controller('company')
export class ComapnyController {
  constructor(private readonly companyService: CompanyService, private readonly filterMaker: FilterMakerService) {
  }

  @ApiResponse({ type: Company })
  @Get()
  public async getAllCompanies(@Res() res): Promise<Company[]> {
    try {
      const companies: Company[] = await this.companyService.getAllCompanies();
      const filters: Filter[] = this.getCompanyFilters(companies);
      return res.status(HttpStatus.OK).json({ data: companies, filters });
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
      return res.status(HttpStatus.BAD_REQUEST).json('Oops, something went wrong creating a company');
    }
  }

  private getCompanyFilters(companies: Company[]): any {
    return {
      jobType: new CloseListFilter([...new Set(companies.map(company => company.jobType).filter(_ => _))]),
      companyType: new CloseListFilter([...new Set(companies.map(company => company.companyType).filter(_ => _))]),
      "workModel.type": new CloseListFilter([...new Set(companies.filter(company => company.workModel?.type).map(company => company.workModel.type).filter(_ => _))]),
      "location.city": new CloseListFilter([...new Set(companies.filter(company => company.location?.city).map(company => company.location.city).filter(_ => _))]),
      "status.type": new CloseListFilter([...new Set(companies.filter(company => company.status?.type).map(company => company.status.type).filter(_ => _))]),
      "status.stage": new CloseListFilter([...new Set(companies.filter(company => company.status?.stage).map(company => company.status.stage).filter(_ => _))]),
      technologies: new CloseListFilter([...new Set(companies.map(company => company.technologies).flat().filter(_ => _))]),
      timeToGetInMinutes: new RangeFilter(Math.min(...companies.map(company => company.timeToGetInMinutes)), Math.max(...companies.map(company => company.timeToGetInMinutes)))
    }
  }
}

// Take object
// Go through all the keys he has
