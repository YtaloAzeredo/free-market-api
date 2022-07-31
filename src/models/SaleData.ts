import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';

@Entity()
export class SaleData extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number;

  @Column({ nullable: false })
    product_owner_id!: number;

  @Column({ nullable: false })
    product_buyer_id!: number;

  @Column({ nullable: false })
    product_id!: number;

  @CreateDateColumn()
    createdAt!: Date;

  @UpdateDateColumn()
    updatedAt!: Date;
}
