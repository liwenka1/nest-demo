import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
@Entity()
export class User {
  @ApiProperty({ example: '1' })
  @PrimaryGeneratedColumn('increment', {
    comment: '主键ID'
  })
  id?: number

  @ApiProperty({ example: 'admin' })
  @Column({ comment: '用户名' })
  name: string

  @ApiProperty({ example: '123456' })
  @Column({ comment: '密码' })
  passowrd: string

  @ApiProperty({ example: 'tyf' })
  @Column({ comment: '昵称' })
  nickName: string
}
