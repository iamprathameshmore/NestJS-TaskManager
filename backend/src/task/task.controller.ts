import { Body, Controller, Get, Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';

@Controller('task')
export class TaskController {

    constructor(private taskService: TaskService){}

    @Get()
    getTask(){
        return  this.taskService.getTask();
    }
    @Post()
    addTask(@Body() tasks: TaskDto){
        return this.taskService.addTask(tasks);
    }
}
