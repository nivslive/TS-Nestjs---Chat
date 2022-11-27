import { Chat } from 'src/chat/entities/chat.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  photo: string;

  @OneToOne(() => Chat)
  room: Chat;
}
