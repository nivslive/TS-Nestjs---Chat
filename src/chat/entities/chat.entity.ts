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
  OneToMany,
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

  @OneToMany(() => Subject, (subject: Subject) => subject.chat)
  subjects: Subject;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
