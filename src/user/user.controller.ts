import { Controller,Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly prismaService: UserService){}

    @Get()
    async getUsers(){
        return this.prismaService.findAll()
    }
}
