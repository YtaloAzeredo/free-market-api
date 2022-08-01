import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Address } from './Address'
import { SaleData } from './SaleData'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ nullable: false })
    name!: string

  @Column({ nullable: false, unique: true })
    email!: string

  @Column({ nullable: false })
    password!: string

  @OneToOne(() => Address)
  @JoinColumn()
    address!: Address

  @OneToMany(() => SaleData, (saleData) => saleData.seller)
    sellers!: User[]

  @OneToMany(() => SaleData, (saleData) => saleData.buyer)
    buyers!: User[]

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
