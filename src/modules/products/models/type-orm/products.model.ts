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
import { ProductCategories } from '../../../product-categories/models/type-orm/product-categories.model'
import { Users } from '../../../users/models/type-orm/users.model'
import { ProductsModel } from '../products.model'

@Entity()
export class Products extends BaseEntity implements ProductsModel {
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
