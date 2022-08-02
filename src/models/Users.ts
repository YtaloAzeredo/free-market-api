import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Addresses } from './Addresses'
import { SalesData } from './SalesData'

@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ nullable: false })
    name!: string

  @Column({ nullable: false, unique: true })
    email!: string

  @Column({ nullable: false })
    password!: string

  @OneToMany(() => Addresses, (address) => address.user)
    addresses!: Addresses[]

  @OneToMany(() => SalesData, (saleData) => saleData.seller)
    sellers!: Users[]

  @OneToMany(() => SalesData, (saleData) => saleData.buyer)
    buyers!: Users[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
