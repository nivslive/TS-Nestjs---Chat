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

  @Column({ nullable: true, type: 'text' })
  color_type: string;

  @Column({ nullable: true, type: 'text' })
  message: string;

  @Column({ nullable: true, type: 'text' })
  color: string;

  @Column({ nullable: true, type: 'int' })
  favorites: number;

  @Column({ type: 'text' })
  emojis: string;

  @ManyToOne(() => Chat)
  room: Chat;

  @OneToOne(() => User, {
    cascade: ['insert', 'update'],
  })
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
