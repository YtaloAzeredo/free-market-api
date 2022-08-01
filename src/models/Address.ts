import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
    id!: number

  @Column({ nullable: false })
    street!: string

  @Column({ nullable: false })
    city!: string

  @Column({ nullable: false })
    zipCode!: string

  @CreateDateColumn()
    createdAt!: Date

  @UpdateDateColumn()
    updatedAt!: Date
}
