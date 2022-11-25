import { Module } from '@nestjs/common';
import { ChatService } from './chat.service';
import { ChatController } from './chat.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entities/chat.entity';
import { User } from 'src/user/entities/user.entity';
import { Message } from 'src/message/entities/message.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Chat, User, Message])],
  controllers: [ChatController],
  providers: [ChatService],
})
export class ChatModule {}
