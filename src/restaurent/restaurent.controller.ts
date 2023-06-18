import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateStuffDto } from 'src/auth/dto/createStuff.dto';
import { UserRole } from 'src/auth/enum/role.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { Roles } from 'src/auth/guards/roles.decorator';
import { Restaurent } from './models/restaurent.schema';
import { RestaurentService } from './restaurent.service';
import { CreateRestaurentDto } from './dto/createRestaurant.dto';

ApiTags('Restaurant')
@Controller('restaurent')
export class RestaurentController {

    constructor(private readonly restaurentService: RestaurentService) { }


    @Post()
    // @ApiBody({ type: CreateRestaurentDto })
    async addStuff(@Body() createRestaurentDto: CreateRestaurentDto): Promise<Restaurent> {
        
        return await this.restaurentService.create(createRestaurentDto);
    }

}
