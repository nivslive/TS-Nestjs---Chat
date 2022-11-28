import { Chat } from 'src/chat/entities/chat.entity';
import { User } from 'src/user/entities/user.entity';

export class CreateMessageDto {
  id: number;
  room: Chat;
  slug: string;
  color_type: string;
  color: string;
  user: User;
  message: string;
}
