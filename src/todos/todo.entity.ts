import { ApiProperty } from '@nestjs/swagger'

export class TodoEntity{
    @ApiProperty({example: "Make a video", description: 'Task name'})
    name: string;
    @ApiProperty({
        example: false,
        description: 'Status of task'
    })
    status: boolean;
    @ApiProperty({description: 'Date created of task'})
    created_at: Date
}