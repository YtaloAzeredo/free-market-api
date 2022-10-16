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
import { Products } from '../../../products/models/type-orm/products.model'
import { Users } from '../../../users/models/type-orm/users.model'
import { SalesDataModel } from '../sales-data-model.interface'

@Entity()
export class SalesData extends BaseEntity implements SalesDataModel {
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
