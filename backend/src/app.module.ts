import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from '@nestjs/config'
import { FirebaseModule } from './firebase/firebase.module';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';


@Module({
  imports: [ ConfigModule.forRoot({ isGlobal: true,cache:true}), FirebaseModule, TaskModule,],
  controllers: [AppController, TaskController],
  providers: [AppService],
})
export class AppModule {}
