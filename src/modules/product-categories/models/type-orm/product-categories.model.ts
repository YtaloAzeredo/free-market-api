import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Products } from '../../../products/models/type-orm/products.model'
import { ProductCategoriesModel } from '../product-categories.model'

@Entity()
export class ProductCategories extends BaseEntity implements ProductCategoriesModel {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ nullable: false, unique: true })
    code!: string

  @Column({ nullable: false })
    description!: string

  @OneToMany(() => Products, (product) => product.category)
    products!: Products[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
