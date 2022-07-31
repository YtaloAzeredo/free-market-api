import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class ProductCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ nullable: false, unique: true })
    code!: string;

  @Column({ nullable: false })
    description!: string;

  @CreateDateColumn()
    createdAt!: Date;

  @UpdateDateColumn()
    updatedAt!: Date;
}
