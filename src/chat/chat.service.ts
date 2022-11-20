import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Injectable()
export class ChatService {
  create(createChatDto: CreateChatDto) {
    return 'This action adds a new chat';
  }

  findAll() {
    const data: Object[] = []
    const rooms: Object[] = [
      'maquintosh', 'roomdasarabias', 'matoresh'
    ]
    rooms.map((v: Object, k: number) => {
      const json = {
        'id': k,
        'room': v
      }
      data.push(json)
    })

    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} chat`;
  }

  update(id: number, updateChatDto: UpdateChatDto) {
    return `This action updates a #${id} chat`;
  }

  remove(id: number) {
    return `This action removes a #${id} chat`;
  }
}
