import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
@Entity('sys_user')
export class User {
  @ApiProperty({ example: 1 })
  @PrimaryGeneratedColumn()
  id: number

  @ApiProperty({ example: 'xiaokai' })
  @Column({ nullable: true })
  username: string

  @ApiProperty({ example: 'lwk' })
  @Column({ nullable: true })
  password: string

  @ApiProperty({ example: '小凯' })
  @Column({ nullable: true })
  nickname: string

  @ApiProperty({ example: '112312' })
  @Column({ nullable: true })
  email: string

  @ApiProperty({ example: '112312' })
  @Column({ nullable: true })
  phone: string

  @ApiProperty({ example: '112312' })
  @Column({ nullable: true })
  address: string

  @Column({
    type: 'datetime',
    default: () => 'CURRENT_TIMESTAMP',
    nullable: false
  })
  createTime: Date

  @ApiProperty({ example: '1123' })
  @Column({ nullable: true })
  avatarUrl: string

  @ApiProperty({ example: '1123' })
  @Column({ nullable: true })
  role: string
}
