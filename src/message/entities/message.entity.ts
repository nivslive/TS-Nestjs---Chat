import { Chat } from 'src/chat/entities/chat.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'message' })
export class Message {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'text' })
  color_type: string;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'text' })
  color: string;

  @Column({ nullable: true, type: 'int' })
  favorites: number;

  @Column({ type: 'text' })
  emojis: string;

  @ManyToOne(() => Chat, (chat: Chat) => chat.room)
  room: Chat;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
