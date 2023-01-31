import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column({ default: null })
  did: string;

  @Column({ default: null })
  ipfsHash: string;

  @Column({ default: null })
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

  @Column({ default: 'https://www.socialblocks.io' })
  qrcode: string;

  @Column({ default: new Date().toISOString() })
  createdAt: string;
}
