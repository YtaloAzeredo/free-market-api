import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class UserProduct extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ nullable: false })
    user_id!: number;

  @Column({ nullable: false })
    product_id!: number;

  @CreateDateColumn()
    createdAt!: Date;

  @UpdateDateColumn()
    updatedAt!: Date;
}
