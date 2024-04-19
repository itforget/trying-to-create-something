import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', length: 100, nullable: false })
  name: string;

  @Column({ name: 'password', length: 255, nullable: false })
  password: string;

  @Column({ name: 'dateBirth', length: 70, nullable: false })
  dateBirth: string;

  @Column({ name: 'email', length: 70, nullable: false })
  email: string;

  @CreateDateColumn({ name: 'created_at' })
  createAt: string;

  @UpdateDateColumn({ name: 'created_at' })
  updateAt: string;

  @DeleteDateColumn({ name: 'created_at' })
  deleteAt: string;
}
