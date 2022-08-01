import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Product } from './Product'
import { User } from './User'

@Entity()
export class SaleData extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number

  @ManyToOne(() => User)
  @JoinColumn()
    seller!: User

  @ManyToOne(() => User)
  @JoinColumn()
    buyer!: User

  @ManyToMany(() => Product)
  @JoinTable()
    products!: Product[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
