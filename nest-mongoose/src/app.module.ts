import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogModule } from './dog/dog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    DogModule,
    MongooseModule.forRoot('mongodb://localhost:27017/test'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
