import { IsBoolean, IsDate, IsString } from "class-validator";

export class CreateTodoDto{
    @IsString()
    name: string;
    @IsBoolean()
    status: boolean;
    @IsDate()
    created_at: Date
}