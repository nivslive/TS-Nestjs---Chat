import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'reaction' })
export class Reaction {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ nullable: false, type: 'text' })
  title: string;

  @Column({ nullable: true, type: 'text' })
  path: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
