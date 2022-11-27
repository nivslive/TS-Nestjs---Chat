import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from 'src/chat/entities/chat.entity';
import { User } from 'src/user/entities/user.entity';
import { Message } from 'src/message/entities/message.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Chat, User, Message])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
