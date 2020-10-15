import { Controller, Get } from '@nestjs/common';

@Controller('todos')
export class TodosController {
    @Get()
    index(): string{
        return 'Todo list'
    }
}
