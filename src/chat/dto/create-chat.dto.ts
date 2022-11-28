// import { Message } from 'src/message/entities/message.entity';
// import { User } from 'src/user/entities/user.entity';

export class CreateChatDto {
  room: string;
  slug: string;
  users: object;
  leader: object;
  messages: object;
}
