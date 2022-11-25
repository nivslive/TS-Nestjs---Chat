import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';

@Entity({ name: 'chat' })
export class Chat {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ type: 'text' })
  room: string;

  // @Column({ type: 'text' })
  // slug: string;

  // @Column({ type: 'integer' })
  // favorites: number;

  @OneToOne(() => User, (user: User) => user.leader)
  leader: User;

  @ManyToOne(() => User, (user: User) => user.room)
  users: User;
}
