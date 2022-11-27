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

  async update(slug: string, updateChatDto: UpdateChatDto) {
    return this.chatModel
      .createQueryBuilder('chat')
      .update<Chat>(Chat, { room: 'new first name' })
      .where('chat.slug = :slug', { slug: slug })
      .execute();
    // const updatedChatEntity: Chat = await this.chatModel.save(updateChatDto);
    // return updatedChatEntity;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
