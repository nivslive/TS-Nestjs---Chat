import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { User } from '../user/entities/user.entity';
import { Message } from '../message/entities/message.entity';
import { Subject } from '../subject/entities/subject.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Chat, User, Message, Subject])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
