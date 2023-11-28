import {Controller, Get} from '@nestjs/common';

@Controller('Cat')
export class CatsController{
    @Get()
    findAll(): string{
        return 'This actions returns my new controllers';
    }
}
