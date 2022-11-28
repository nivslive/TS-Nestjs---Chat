import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './entities/message.entity';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageModel: Repository<Message>,
  ) {}
  async create(createMessageDto: CreateMessageDto) {
    const userEntity: Message = this.messageModel.create(createMessageDto);
    const createdUserEntity: Message = await this.messageModel.save(userEntity);
    return createdUserEntity;
  }

  findAll() {
    return this.messageModel.find({
      relations: {
        user: true,
        room: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
