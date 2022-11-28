import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chatService: ChatService) {}

  @Post()
  create(@Body() createChatDto: CreateChatDto) {
    return this.chatService.create(createChatDto);
  }

  @Get()
  findAll() {
    return this.chatService.findAll();
  }

  @Get('/rooms')
  findOnly() {
    return this.chatService.findOnly();
  }

  @Get(':slug')
  findOne(@Param('slug') slug: string) {
    return this.chatService.findOne(slug);
  }

  @Get('/room/:id')
  findPerID(@Param('id') id: number) {
    return this.chatService.findPerID(id);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() updateChatDto: UpdateChatDto) {
    return this.chatService.update(slug, updateChatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatService.remove(+id);
  }
}
