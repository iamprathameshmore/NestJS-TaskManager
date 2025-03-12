import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { FirebaseModule } from 'src/firebase/firebase.module';

@Module({
  imports:[FirebaseModule],
  providers: [TaskService],
  exports:[TaskService]

})
export class TaskModule {}
