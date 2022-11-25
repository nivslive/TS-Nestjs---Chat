import { Chat } from 'src/chat/entities/chat.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'message' })
export class Message {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'text' })
  slug: string;

  @Column({ type: 'text' })
  color: string;

  @ManyToOne(() => Chat, (chat: Chat) => chat.room)
  room: Chat;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;
}
