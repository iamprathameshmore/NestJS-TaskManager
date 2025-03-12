import { IsNotEmpty, IsString } from "class-validator";


export class TaskDto{

    @IsString()
    @IsNotEmpty()
    task:string;

    @IsString()
    @IsNotEmpty()
    author:string;
    
    @IsString()
    @IsNotEmpty()
    due_date:string;
}