import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(@InjectRepository(Chat) private chatModel: Repository<Chat>) {}
  async create(createChatDto: CreateChatDto) {
    const userEntity: Chat = this.chatModel.create(createChatDto);
    const createdUserEntity: Chat = await this.chatModel.save(userEntity);
    return createdUserEntity;
  }

  findAll() {
    return this.chatModel.find({
      relations: {
        users: true,
        messages: true,
      },
    });
  }

  findOnly() {
    return this.chatModel.find();
  }

  findOne(slug: string) {
    return this.chatModel.findOne({
      relations: {
        users: true,
        messages: true,
      },
      where: {
        slug: slug,
      },
    });
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
