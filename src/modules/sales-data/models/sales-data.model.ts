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
import { Products } from '../../products/models/products.model'
import { Users } from '../../users/models/users.model'

@Entity()
export class SalesData extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number

  @ManyToOne(() => Users)
  @JoinColumn()
    seller!: Users

  @ManyToOne(() => Users)
  @JoinColumn()
    buyer!: Users

  @ManyToMany(() => Products)
  @JoinTable()
    products!: Products[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
