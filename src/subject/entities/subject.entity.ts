import { Chat } from '../../chat/entities/chat.entity';
import { Message } from '../../message/entities/message.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity({ name: 'subject' })
export class Subject {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ nullable: true, type: 'text' })
  slug: string;

  @OneToMany(() => Message, (message: Message) => message.room, {
    cascade: true,
  })
  messages: Message[];

  @ManyToOne(() => Chat, (chat: Chat) => chat.id)
  chat: Chat;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
