import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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

    @Get(':id')
    show(@Param('id') id): Promise<Todo>{
        return this.todosService.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateTodoDto: CreateTodoDto): Promise<Todo>{
        return this.todosService.updateById(id, updateTodoDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<any>{
        return this.todosService.deleteById(id);
    }
}
