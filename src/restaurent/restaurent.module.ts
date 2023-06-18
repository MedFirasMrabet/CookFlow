import { Module } from '@nestjs/common';
import { RestaurentController } from './restaurent.controller';
import { RestaurentService } from './restaurent.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RestaurentSchema } from './models/restaurent.schema';

@Module({
  controllers: [RestaurentController],
  providers: [RestaurentService],
  imports: [MongooseModule.forFeature([{ name: 'Restaurent', schema: RestaurentSchema }])]

})
export class RestaurentModule {}
