import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { FacultiesModule } from './faculties/faculties.module.js';
import { Faculty } from './faculties/entities/faculty.entity.js';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Data@shk12',
      database: 'faculty_db',
      entities: [Faculty],
      synchronize: true,
    }),
    FacultiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}