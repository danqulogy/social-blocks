import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ default: null })
  did: string;

  @Column({ default: new Date().toISOString() })
  createdAt: string;
}
