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
import { ProductCategories } from './product-categories.model'
import { Users } from './users.model'

@Entity()
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ nullable: false })
    description!: string

  @Column({ nullable: false })
    price!: number

  @Column({ nullable: false })
    quantity!: number

  @ManyToOne(() => ProductCategories, (category) => category.products)
    category!: ProductCategories

  @ManyToMany(() => Users)
  @JoinTable()
    users!: Users[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
