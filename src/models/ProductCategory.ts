import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Product } from './Product'

@Entity()
export class ProductCategory extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ nullable: false, unique: true })
    code!: string

  @Column({ nullable: false })
    description!: string

  @OneToMany(() => Product, (product) => product.category)
    products!: Product[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
