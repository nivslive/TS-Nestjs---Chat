import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';

@Injectable()
export class ChatService {
  constructor(@InjectRepository(Chat) private chatModel?: Repository<Chat>) {}
  async create(createChatDto: CreateChatDto) {
    const userEntity: Chat = this.chatModel.create(createChatDto);
    const createdUserEntity: Chat = await this.chatModel.save(userEntity);
    return createdUserEntity;
  }

  findAll() {
    return this.chatModel.find({
      relations: {
        users: true,
        subjects: true,
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
        subjects: true,
      },
      where: {
        slug: slug,
      },
    });
  }
  findPerID(id: number) {
    return this.chatModel.findOne({
      relations: {
        users: true,
        subjects: true,
      },
      where: {
        id: id,
      },
    });
  }
  async update(id: string, updateChatDto: UpdateChatDto) {
    return this.chatModel
      .createQueryBuilder('chat')
      .update<Chat>(Chat, updateChatDto)
      .where('chat.id = :id', { id: id })
      .execute();
    // const updatedChatEntity: Chat = await this.chatModel.save(updateChatDto);
    // return updatedChatEntity;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
