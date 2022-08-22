import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { Users } from '../../users/models/users.model'

@Entity()
export class Addresses extends BaseEntity {
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
