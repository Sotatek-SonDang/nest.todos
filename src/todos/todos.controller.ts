import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTodoDto } from './create-todo.dto';
import { Todo } from './todo.schema';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService){}

    @Get()
    index(): Promise<Todo[]>{
        return this.todosService.findAll();
    }

    @Post()
    create(@Body() createTodoDto: CreateTodoDto): Promise<Todo>{
        return this.todosService.create(createTodoDto);
    }
}
