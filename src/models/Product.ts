import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ nullable: false })
    description!: string;

  @Column({ nullable: false })
    price!: number;

  @Column({ nullable: false })
    quantity!: number;

  @Column({ nullable: true })
    category_id!: number;

  @CreateDateColumn()
    createdAt!: Date;

  @UpdateDateColumn()
    updatedAt!: Date;
}
