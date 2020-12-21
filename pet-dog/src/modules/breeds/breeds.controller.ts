import { Controller, Get } from '@nestjs/common';

@Controller('racas')
export class BreedsController {
    @Get()
    findAll(): string {
        return "Listar todos as raças!";
    }
}
