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
import { Products } from './Products'
import { Users } from './Users'

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
