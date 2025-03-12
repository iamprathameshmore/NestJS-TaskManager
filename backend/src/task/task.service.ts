import { Body, Inject, Injectable } from '@nestjs/common';
import { app } from 'firebase-admin';
import {  ConfigService } from '@nestjs/config';
import { TaskDto } from './task.dto';


@Injectable()
export class TaskService {
    private Database: FirebaseFirestore.Firestore;
    private Collection: FirebaseFirestore.CollectionReference;

    constructor(@Inject('FIREBASE_APP') private FBApp: app.App, private configService: ConfigService) {

        const collectionName = this.configService.get<string>('COLLECTION_NAME')
        if (!collectionName) throw new Error("Collection Is Empty");

        this.Database = FBApp.firestore();
        this.Collection = this.Database.collection(collectionName)
    }


    async getTask() {
        try {
            const taskList = await this.Collection.get();
            const data =taskList.docs.map((items)=>({
                    id:items.id,
                    task:items.data()}))
                    
            return {
                success: true,
                msg: "Tasks retrieved successfully", 
                data: data,
                length:taskList.docs.length,
                error: false,
                timeStamp: Date.now()
            };
        } catch (error) {
            return {
                success: false, 
                msg: "An error occurred while fetching tasks", 
                data: null,
                error: true, 
                errorMessage: error.message,
                timeStamp: Date.now()
            };
        }
    }
    


    async addTask(@Body() tasks: TaskDto) {
        if (!tasks || Object.keys(tasks).length === 0) {
            return { msg: 'All fields are required' };
        }
        try {
            const task = await this.Collection.add(tasks)
            const data ={
                id:task.id,
                ...tasks
            }
            return {
                success: true,
                msg: "task Added Successfully",
                data: data,
                error:false,
                timeStamp: Date.now()
            }

        } catch (error) {
            return {
                success: false,
                msg: 'An error occurred', 
                data:null,
                error: error.message, 
                timeStamp: Date.now()
            };
        }
    }



}
