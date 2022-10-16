import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Users } from '../../../users/models/type-orm/users.model'
import { AddressesModel } from '../addresses-model.interface'

@Entity()
export class Addresses extends BaseEntity implements AddressesModel {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ nullable: false })
    street!: string

  @Column({ nullable: false })
    city!: string

  @Column({ nullable: false })
    zipCode!: string

  @ManyToOne(() => Users, (user) => user.addresses)
    user!: Users

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
