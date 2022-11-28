import { Chat } from 'src/chat/entities/chat.entity';
import { Message } from 'src/message/entities/message.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ nullable: false, type: 'text' })
  name: string;

  @Column({ nullable: true, type: 'text' })
  photo: string;

  @OneToOne(() => Chat)
  room: Chat;

  @OneToMany(() => Message, (message: Message) => message.id)
  messages: Message;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
