import { Message } from '../../message/entities/message.entity';
import { User } from '../../user/entities/user.entity';
import { Subject } from '../../subject/entities/subject.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'chat' })
export class Chat {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'text' })
  room: string;

  @Column({ nullable: true, type: 'text' })
  slug: string;

  @ManyToOne(() => User, (user: User) => user.room)
  users: User;

  @ManyToOne(() => Subject)
  subjects: Subject;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
