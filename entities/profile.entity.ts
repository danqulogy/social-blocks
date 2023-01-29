import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ default: '' })
  did: string;

  @Column({ default: '' })
  name: string;

  @Column({ default: null })
  location: string;

  @Column({ default: null })
  bio: string;

  @Column({ default: null })
  email: string;

  @Column({ default: null })
  website: string;

  @Column({ default: null })
  github: string;

  @Column({ default: null })
  twitter: string;

  @Column({ default: null })
  tiktok: string;

  @Column({ default: null })
  instagram: string;

  @Column({ default: null })
  facebook: string;

  @Column({ default: null })
  qrcode: string;

  @Column({ default: new Date().toISOString() })
  createdAt: string;
}
