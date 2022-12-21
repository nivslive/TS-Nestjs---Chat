import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Subject } from './entities/subject.entity';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject) private subjectModel: Repository<Subject>,
  ) {}
  async create(createSubjectDto: CreateSubjectDto) {
    const userEntity: Subject = this.subjectModel.create(createSubjectDto);
    const createdUserEntity: Subject = await this.subjectModel.save(userEntity);
    return createdUserEntity;
  }

  findAll() {
    return this.subjectModel.find();
  }

  findOnly() {
    return this.subjectModel.find();
  }

  findOne(slug: string) {
    return this.subjectModel.findOne({
      where: {
        slug: slug,
      },
    });
  }
  findPerID(id: number) {
    return this.subjectModel.findOne({
      where: {
        id: id,
      },
    });
  }
  async update(id: string, updateSubjectDto: UpdateSubjectDto) {
    return this.subjectModel
      .createQueryBuilder('subject')
      .update<Subject>(Subject, updateSubjectDto)
      .where('subject.id = :id', { id: id })
      .execute();
    // const updatedSubjectEntity: Subject = await this.subjectModel.save(updateSubjectDto);
    // return updatedSubjectEntity;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
