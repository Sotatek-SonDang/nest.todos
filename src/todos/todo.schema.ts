import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type TodoDocument = Todo & Document

@Schema() // Todo class to todos collection in db. 
export class Todo{
    @Prop({required: true}) // Property and schema type
    name: string;

    @Prop()
    status: boolean;

    @Prop({default: Date.now, required: false})
    created_at: Date
}

export const TodoSchema = SchemaFactory.createForClass(Todo)