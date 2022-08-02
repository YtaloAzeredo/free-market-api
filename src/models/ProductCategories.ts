import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Products } from './Products'

@Entity()
export class ProductCategories extends BaseEntity {
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
