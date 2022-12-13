import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './chat/entities/chat.entity';
import { UserModule } from './user/user.module';
import { ReactionModule } from './reaction/reaction.module';
import { MessageModule } from './message/message.module';
import { User } from './user/entities/user.entity';
import { Message } from './message/entities/message.entity';
import { Reaction } from './reaction/entities/reaction.entity';
import { SubjectModule } from './subject/subject.module';
import { Subject } from './subject/entities/subject.entity';
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'sqlite',
        database: 'database.db',
        entities: [Chat, User, Message, Reaction, Subject],
        migrations: ['dist/datasources/*.js'],
        synchronize: true, //development only
      }),
    }),
    ChatModule,
    UserModule,
    ReactionModule,
    MessageModule,
    SubjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
