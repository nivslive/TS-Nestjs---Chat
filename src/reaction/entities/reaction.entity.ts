import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reaction' })
export class Reaction {
  @PrimaryGeneratedColumn({ type: 'integer' })
  id: number;

  @Column({ nullable: false, type: 'text' })
  title: string;

  @Column({ nullable: true, type: 'text' })
  path: string;
}
