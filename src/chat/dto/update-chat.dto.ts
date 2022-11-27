import { PartialType } from '@nestjs/mapped-types';
import { CreateChatDto } from './create-chat.dto';

export class UpdateChatDto extends PartialType(CreateChatDto) {
  room: string;
  slug: string;
  users: object;
  messages: object;
}
