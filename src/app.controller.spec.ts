import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from 'rxjs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { Chat } from './chat/entities/chat.entity';
import { Message } from './message/entities/message.entity';
import { MessageModule } from './message/message.module';
import { Reaction } from './reaction/entities/reaction.entity';
import { ReactionModule } from './reaction/reaction.module';
import { SubjectModule } from './subject/subject.module';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          expandVariables: true,
        }),
        TypeOrmModule.forRoot(),
        ChatModule,
        UserModule,
        ReactionModule,
        MessageModule,
        SubjectModule,
      ],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
