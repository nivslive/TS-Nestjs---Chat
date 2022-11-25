import { Chat } from 'src/chat/entities/chat.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @OneToOne(() => Chat, (chat) => chat.leader)
  leader: Chat;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  slug: string;

  @ManyToOne(() => Chat, (user) => user.room)
  room: Chat;
}
