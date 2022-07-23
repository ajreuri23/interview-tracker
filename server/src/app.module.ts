import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComapnyModule } from './company/company.module';

@Module({
  imports: [ComapnyModule, MongooseModule.forRoot('mongodb+srv://ajreuri23:vguzrvfhaha1@cigi.veynx.mongodb.net/interviews')],
  controllers: [],
  providers: [],
})
export class AppModule {}
