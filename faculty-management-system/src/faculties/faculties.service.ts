import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Faculty } from './entities/faculty.entity.js';
import { CreateFacultyDto } from './dto/create-faculty.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculty)
    private facultyRepo: Repository<Faculty>,
  ) {}

  async createFaculty(data: CreateFacultyDto) {
    const faculty = this.facultyRepo.create(data);
    return await this.facultyRepo.save(faculty);
  }
}