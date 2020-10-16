import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTodoDto } from './create-todo.dto';
import { Todo, TodoDocument } from './todo.schema';

@Injectable()
export class TodosService {
    constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>){
    }

    async create(createTodo: CreateTodoDto): Promise<Todo>{
        const createdTodo = new this.todoModel(createTodo);
        return createdTodo.save();
    }

    async findAll(): Promise<Todo[]>{
        return this.todoModel.find().lean().exec();
    }
}
