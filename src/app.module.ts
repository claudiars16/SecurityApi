import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfileModule } from './services/profile.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://claudia:claudia@cluster0-poxtv.mongodb.net/test?retryWrites=true'),
    ProfileModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }