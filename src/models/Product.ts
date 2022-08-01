import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { ProductCategory } from './ProductCategory'
import { User } from './User'

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ nullable: false })
    description!: string

  @Column({ nullable: false })
    price!: number

  @Column({ nullable: false })
    quantity!: number

  @ManyToOne(() => ProductCategory, (category) => category.products)
    category!: ProductCategory

  @ManyToMany(() => User)
  @JoinTable()
    users!: User[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
