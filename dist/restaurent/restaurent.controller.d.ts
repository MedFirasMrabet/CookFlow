import { Restaurent } from './models/restaurent.schema';
import { RestaurentService } from './restaurent.service';
import { CreateRestaurentDto } from './dto/createRestaurant.dto';
export declare class RestaurentController {
    private readonly restaurentService;
    constructor(restaurentService: RestaurentService);
    addStuff(createRestaurentDto: CreateRestaurentDto): Promise<Restaurent>;
}
